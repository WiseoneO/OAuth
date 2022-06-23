const express = require("express");
const connectDB = require("./config/database")
const dotenv =  require("dotenv");
dotenv.config()
const authRoute = require("./routes/authRoute")
const app = express();
const passportSetup = require("./config/passportSetup");
connectDB();

// set view engine
app.set('view engine', 'ejs');
app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.render('index');
})




app.listen(process.env.PORT || 6000, ()=>{
    console.log(`Server running on port 3000`);
});