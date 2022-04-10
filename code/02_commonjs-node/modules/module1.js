// commonjs export 对象
module.exports = {
    msg: 'module1',
    foo() {
        console.log(this.msg)
    }
};