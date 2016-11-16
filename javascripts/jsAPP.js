/**
 * Created by xuchao on 2016/11/16.
 */
/**
 * my javascript app
 *
 * @module myapp
 */
// YUI
let MYAPP = {};
/**
 * math function
 * @namespace MYAPP
 * @class math_stuff
 */
MYAPP.math_stuff = {

    /**
     * sum two numbers
     *
     * @method sum
     * @param {Number} a
     * @param {Number} b
     * @return {Number}
     */
    sum:function (a, b) {
        return a + b;
    },
    /**
     * Multiplies two numbers
     *
     * @method multi
     * @param {number} a
     * @param {number} b
     * @return {number}
     */
    multi:function (a, b) {
        return a * b;
    }
};
/**
 * Constructs Person objects
 * @class Preson
 * @constructor
 * @namespace MYAPP
 * @param {String} first
 * @param {String} last
 */
MYAPP.Person = function (first, last) {
    'use strict';
    /**
     * first name
     * @property first_name
     * @type String
     */
    this.first_name = first;
    /**
     * last name
     * @property last_name
     * @type String
     */
    this.last_name = last;
};
/**
 * return the name of the preson
 *
 * @method getName
 * @return {String} name
 */
MYAPP.Person.prototype.getName = function () {
    'use strict';
    return this.first_name + " " + this.last_name;
};

let dog = {};
dog.name = "Benji";
dog.getName = function () {
    'use strict';
    return dog.name;
};
delete dog.name;
dog.say = function () {
    'use strict';
    return "woff!";
};
dog.fleas = true;


let cat = {

    name: "Kitty",
    getName: function () {
        'use strict';
        return this.name;
    }
};

cat.getName();

// 两种方式来构造函数

let car = {goes: "far"};
car.goes();

// 不推荐使用new

// let v = new object();
// v.goes = "far";
