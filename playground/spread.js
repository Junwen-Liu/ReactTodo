/*function add (a, b){
	return a+b;
}

console.log(add(3,5));

var arr = [5,6];

console.log(add(...arr));*/


gpa = ['tag', 'link', 'gjlaks']

gpb = ['lins', 'best', 'askjf']

gbc = [...gpa, ...gpb]

console.log(gbc)


function greeting(a, b){
	return 'hello ' + a + ", you are " + b
}

name = [['john', 'awesome'], ['jane', 'great']]

for (va of name){

	console.log(greeting(...va))
}

name.forEach(function(n){
	console.log(greeting(...n))
})