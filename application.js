const Emitter = require('events');
const http = require("http");

const Context = require("./context");
const con = new Context();

module.exports = class Loa extends Emitter {
    constructor(){
        super();
        this.middleware = [];
        this.nameList = [];
    }

    use(fn,name){
        this.middleware.push(fn);
        this.nameList.push(name);
        //在use内部做一个隐式的映射，将中间件挂载到Context的prototype对象上
        for(let i=0; i<this.middleware.length; i++){
            Context.prototype[this.nameList[i]] = this.middleware[i];
        }
    }
    //middle 是中间件的例子
    middle(req,res) {
        res.end("server start");
    }
    listen(port) {
        console.log(port + " port start");
        const server = http.createServer((req,res) => {
            this.middle(req,res);
        });
        return server.listen(port);
    }
};
