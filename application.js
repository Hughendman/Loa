const Emitter = require('events');
const http = require("http");

module.exports = class Loa extends Emitter {
    constructor(){
        super();
        this.middleware= [];
    }

    use(fn){

    }
    //middle 是中间件的例子
    middle(req,res) {
        res.end("server start");
    }
    listen(port) {
        const server = http.createServer((req,res) => {
            this.middle(req,res);
        });
        return server.listen(port);
    }
};
