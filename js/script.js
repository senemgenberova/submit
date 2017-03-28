var form = document.getElementById("form");
var ad = document.getElementById("name_in");
var soyad = document.getElementById("surname_in");
var formula = document.getElementById("formula");
var solution = document.getElementById("solution");

var sign = ["+","-","*","/"];
var index = Math.floor((Math.random() * 4));
var a = Math.floor((Math.random() * 10) + 1);
var b = Math.floor((Math.random() * 10) + 1);

var result = 0;

window.addEventListener("load",function() {
	formula.value = a +sign[index] + b;
	if(sign[index] == "+"){
		result = a + b;
		console.log(result);
	}
	else if(sign[index] == "*"){
		result = a*b;
		console.log(result);
	}
	else if(sign[index] == "-"){
		result = a-b;
		console.log(result);
	}
	else if(sign[index] == "/"){
		result = a/b;
		console.log(result);
	}
});


form.addEventListener("submit",function(event){
	event.preventDefault();
	if(ad.value == 0 || soyad.value == 0 || formula.value == 0 || solution.value != result){
		form.innerHTML += "Error"
	}
	else{
		form.innerHTML += "Oldu";
	}
});