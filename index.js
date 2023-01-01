const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const cookieParser = ("cookie-parser");
const {routerPost} = require("./router/RouterList");
const { routerGet } = require("./router/RouterGet");
const {routerUpdate}= require("./router/RouterUpdate");

app.use(express.json())

app.use(
    cors({
        origin : "http://localhost:3000",
        credentials : false,
        optionsSuccessStatus: 200,
    })
);
app.use("/", routerPost)
app.use("/", routerGet)
app.use("/", routerUpdate)
app.listen(port, () => {
    console.log("IM ALIVE ON 3001")
})