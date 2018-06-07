/*创建一个类Context，由这个类来统一操作request和response对象
* 这个类的方法很简单，除了构造函数就是print和end两个方法
* 由于在后面的代码中我们会对Context对象进行修改，所以这里用类的方法
* 在实际中，中间件是调用use方法动态增加的，所以我们可以通过修改Context的prototype对象的方式来动态给Context添加方法，在application中的use中实现
*/
module.exports = class Context {
    constructor (req,res) {
        this.req = req;
        this.res = res;
    }
    print(){
        console.log(this.req);
        console.log(this.res);
    }
    end(){
        this.res.end("End");
    }
};