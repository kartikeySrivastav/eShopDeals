const { default: mongoose } = require("mongoose");
URL = process.env.MONGODB_URL;

const dbConnect = () => {
  try {
    const conn = mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = dbConnect;
