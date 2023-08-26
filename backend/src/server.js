const bodyParser = require("body-parser");
const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const Port = process.env.PORT;
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnect");
const morgan = require("morgan");
// routes

const authRouter = require("./routes/userRoute");
const productRouter = require("./routes/productRoute");

dbConnect();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => {
	console.log(`Server is running at port ${Port}`);
});
