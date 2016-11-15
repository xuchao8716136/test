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

