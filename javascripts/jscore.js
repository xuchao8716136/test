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

function Foo(y) {
    this.y = y;
}

Foo.prototype.x = 10;

Foo.prototype.calculate = function (z) {
    return this.x = this.y + z;
};

var b = new Foo(30);
var c = new Foo(30);

b.calculate(30);
c.calculate(40);

console.log(
    b._proto_ === Foo.prototype,
    c._proto_ === Foo.prototype,
    b.constructor === Foo,
    c.constructor === Foo,
    Foo.prototype.constructor === Foo,

    b.calculate === b._proto_.calculate,
    b._proto_.calculate === Foo.prototype.calculate
);
