//document.getElementById("output").innerHTML = "Hello Wordl";

//document.write("Hello Wordl");

//window.alert("Hello World");

//console.log("Hello World");

/*var x = 10;
var y = 10;

var total = x + y;

window.alert(total);*/

/*var x = 10;
x -= 4;

window.alert(x);*/

/*var age = 18;

if (age==17) {
 window.alert("MINOR");
}else{
	window.alert("YOU CAN GO");
}
*/

/*function computeAge(edad, taon){
	var total = edad + taon;
	window.alert(total);
}

window.alert( computeAge(28, 5) );

document.getElementById("output").innerHTML = computeAge(30, 5);

/*document.addEventListener("click", function(){

	alert("The page was clicked!");
});*/

/*document.addEventListener("click", function(){

	computeAge(28, 5);
});*/


var todo_count = 1;
document.getElementById("savebtn").addEventListener("click", addTodo);

function addTodo(){

	var todo_item = document.getElementById("todo");

	if (todo_item.value == "") {
		window.alert("Please enter todo item!");
		todo_item.focus();

	}else{

		appendTodo(todo_item.value);
	}
}

function appendTodo( todo_item ){

 	var ul = document.getElementById("todo-list");
 	var li = document.createElement("li");


 	li.appendChild(document.createTextNode(todo_count + "." + todo_item));

 	li.setAttribute("class", "todo-item");

 	ul.appendChild(li);

 	clear_Field("todo");

 	setFocus("todo");

 	todo_count++;

}

function clear_Field(field_name){

	document.getElementById(field_name).value = "";
}

function setFocus(field_name){

	document.getElementById(field_name).focus();
}

/*const printMyName = (name) => {
	console.log(name);
}

printMyName("Max");*/