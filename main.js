const Loa = require("./application");
const app = new Loa();

//使用中间件

let middleWare1 = function (req, res) {
    res.end("I am middleWare1");
};
let middleWare2 = function (req, res) {
    res.end("I am middleWare2");
};
app.use(middleWare1,"middleWare1");
app.use(middleWare2,"middleWare2");

app.listen(8000);