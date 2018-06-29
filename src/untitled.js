/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-16 19:30:13
 * @version $Id$
 */
function Animal(name, age) {     this.name = name; }
Animal.prototype.getName = function() {     return this.name; }


var Cat = inherit(Animal, {     say: function() {        console.log('俺是' + this.getName());     } });

function inherit(Animal, extend) {
	var Cat = function(...arg) {
		var animal = new Animal(...arg);
		this = {}
		Cat.prototype = {
			...Animal.prototype,
			...animal,
			...extend,
		}
	}

	return Cat;


}



function delegate(parent, tagName, event, handle) {
	parent.addEventListener(event, function(e) {

		if (e.taget.tagName == tagName) {
			handle(e);
		}
	}, false);
	// parent.querySelectorAll(event, function() {}, true)
}


Function.prototype.mybind = function(...obj) {
	return  function(...org) {
		console.log(this);
		var that = obj.splice(0, 1);
		this.apply(that, [...obj, ...org]);
	}
}
































