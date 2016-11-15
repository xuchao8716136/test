// prototype
// var a = {
//     x:10,
//     calculate:function(z){
//         return this.x + this.y + z;
//  }
// };
// var b = {
//     y:20,
//     _proto_:a
// };
//
// var c = {
//     y:20,
//     _proto_:a
// };
//
// b.calculate(30);
// c.calculate(40);

// constructor function

// function Foo(y) {
//     this.y = y;
// }
//
// Foo.prototype.x = 10;
//
// Foo.prototype.calculate = function (z) {
//     return this.x = this.y + z;
// };
//
// var b = new Foo(30);
// var c = new Foo(30);
//
// b.calculate(30);
// c.calculate(40);
//
// console.log(
//     b._proto_ === Foo.prototype,
//     c._proto_ === Foo.prototype,
//     b.constructor === Foo,
//     c.constructor === Foo,
//     Foo.prototype.constructor === Foo,
//
//     b.calculate === b._proto_.calculate,
//     b._proto_.calculate === Foo.prototype.calculate
// );


// es6

class Foo{

    constructor(name){
        this._name = name;
    }

    getName(){
        return this._name;
    }
}
class Bar extends Foo{
    getName(){
        return super.getName() + 'Doe ';
    }
}

var bar = new Bar('John');
console.log(bar.getName());

// 作用域链

var x = 10;
(function () {
    var y = 20;
    (function bar() {
        var z = 30;
        console.log(x + y + z);
    })()
})();

// 主要是指的是函数和变量之间的调用，可能有点面向过程的意思
// 先找原型链_proto_然后再找作用域链_parent_？
Object.prototype.x = 10;
var w = 20;
var y = 30;
// in SpiderMonkey global object
// i.e. variable object of the global
// context inherits from "Object.prototype",
// so we may refer "not defined global
// variable x", which is found in
// the prototype chain
console.log(x); // 10
// 匿名函数
(function foo() {
// "foo" local variables
    var w = 40;
    var x = 100;
// "x" is found in the
// "Object.prototype", because
// {z: 50} inherits from it
    with ({z: 50}) {
        console.log(w, x, y , z); // 40, 10, 30, 50
    }
// after "with" object is removed
// from the scope chain, "x" is
// again found in the AO of "foo" context;
// variable "w" is also local
    console.log(x, w); // 100, 40
// and that's how we may refer
// shadowed global "w" variable in
// the browser host environment
    console.log(window.w); // 20
})();

