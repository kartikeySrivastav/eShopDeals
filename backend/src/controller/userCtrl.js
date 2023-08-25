const User = require("../modals/userModal");
const asyncHandler = require("express-async-handler");
const generateToken = require("../config/jwtToken");
const generateRefreshToken = require("../config/refreshToken");
const validateMongoDbId = require("../utils/validateMongoDbId");
const jwt = require("jsonwebtoken");

const createUser = asyncHandler(async (req, res) => {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const findUser = await User.findOne({ email });
    if (findUser) {
      throw new Error("User with this email already exists");
    }

    const uniqueUsername = `${firstName.toLowerCase()}_${lastName.toLowerCase()}_${Math.random()
      .toString(36)
      .substring(7)}`;
    const fullName = `${firstName} ${lastName}`;

    const newUser = await User.create({
      ...req.body,
      username: uniqueUsername,
      fullName: fullName,
    });
    res.json(newUser);
  } catch (error) {
    throw new Error(error);
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });

  if (findUser && (await findUser.isPasswordMatched(password))) {
    const { _id, firstName, lastName, email, username, role } = findUser;
    const refreshToken = generateRefreshToken(findUser?._id);

    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id,
      firstName,
      lastName,
      username,
      email,
      role,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// handle refreshToken

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No refresh token in cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (error, decoded) => {
    if (error || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?.id);
    res.json(accessToken);
  });
  res.json(user);
});

// logout functionality
const logout = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.cookies?.refreshToken;

    const user = await User.findOne({ refreshToken });

    if (!user) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true,
      });
      return res.status(403).json({ message: "User not found" });
    }

    await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });

    res.sendStatus(204); // No Content
  } catch (error) {
    throw new Error(error);
  }
});

const updatedUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(id);
  try {
    const updateUser = await User.findByIdAndUpdate(
      _id,
      {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const allUser = await User.find();
    res.json(allUser);
  } catch (error) {
    throw new Error(error);
  }
});

const getUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const getAUser = await User.findById(id);
    res.json({ getAUser });
  } catch (error) {
    throw new Error(error);
  }
});

const deletedUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.json({ deleteUser });
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(id);
  try {
    const block = await User.findByIdAndUpdate(
      _id,
      {
        isBlocked: true,
      },
      { new: true }
    );
    res.json({ message: "User Blocked" });
  } catch (error) {
    throw new Error(error);
  }
});
const unBlockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      { new: true }
    );
    res.json({ message: "User unblocked" });
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getUser,
  deletedUser,
  updatedUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logout,
};
