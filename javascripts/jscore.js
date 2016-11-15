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
    // with 是什么意思并不是很清楚
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

// 所谓的闭包就是优先等级的复写 overwriter
// 因为全局变量被引用了，但是全局变量被局部变量重新附值了，造成了
// 局部的函数不会收到外部的函数影响，除非专门调用，因此形成闭包

var x = 10;
// global function
function foo() {
    console.log(x);
}
(function (funArg) {
// local "x"
    var x = 20;
// there is no ambiguity,
// because we use global "x",
// which was statically saved in
// [[Scope]] of the "foo" function,
// but not the "x" of the caller's scope,
// which activates the "funArg"
    funArg(); // 10, but not 20
})(foo);
// 最后就是传递foo的值
// pass "down" foo as a "funarg"

// 变量在匿名函数之中是无法被调用的，因此形成闭包。
function baz() {
    var x = 1;
    return {
        foo: function foo() { return ++x; },
        bar: function bar() { return --x; }
    };
}
var closures = baz();
console.log(
    closures.foo(), // 2
    closures.bar() // 1
);

// 在这个函数之中，变量被复写了，原本变量是1 先执行foo 那么x被复写为 1++ = 2 这个时候
// x的值被存储在x的位置，即两个函数的父级的位置，那么x被复写为 2-- = 1

var data = [];
for (var k = 0; k < 3; k++) {
    data[k] = function () {
        alert(k);
    };
}
data[0](); // 3, but not 0
data[1](); // 3, but not 1
data[2](); // 3, but not 2

// 在这个函数之中for循环之中是一个闭包，他本身来说也是一个函数，或者说是方法
// 因此会在for之中循环完毕而不接受data的赋值，作用链在这里的需要使用额外的函数

var data = [];
for (var k = 0; k < 3; k++) {
    data[k] = (function (x) {
        return function () {
            alert(x);
        };
    })(k); // 传递k的值在这里作用链可以传递值，是因为在这里还没有进入循环数组

}
// now it is correct
data[0](); // 0
data[1](); // 1
data[2](); // 2

// This
// 简单来说this指的是当前的阶段的函数，也就是说，在其接受的值的过程的显现出来
// 的值，也有可能是一个变量，更基本的来说this指向一个对象，所谓的对象就是被声明
// 的，构造的对象。

var x = 10;
console.log(
    x, // 10
    this.x, // 10
    window.x // 10
);

// the code of the "foo" function
// never changes, but the "this" value
// differs in every activation
function foo() {
    alert(this);
}
// 设置一个函数
// caller activates "foo" (callee) and
// provides "this" for the callee
foo(); // global object
// 调用
foo.prototype.constructor();
// 原型再进行构造
// foo.prototype
var bar = {
    baz: foo
};
// 原型函数.这个函数继承foo的属性
// 这里事实上也可以使用class属性来使得其更加的清晰
bar.baz(); // bar
(bar.baz)(); // also bar
(bar.baz = bar.baz)(); // but here is global object
(bar.baz, bar.baz)(); // also global object
(false || bar.baz)(); // also global object
var otherFoo = bar.baz;
otherFoo(); // again global object
// 这一大段我不知道是什么意思
