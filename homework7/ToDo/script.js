window.onload = function() {
	
let input  = document.getElementById("ToDo_input");
let add = document.getElementById("add");

add.addEventListener("click",function() {
	let task = document.createElement("div");
	let delButton = document.createElement("button");
	tasks.append(task);
	tasks.append(delButton);
	delButton.classList.add("del");
	delButton.textContent = "del";
	task.classList.add("task");
	task.textContent = input.value;
	input.value = "";
	
	delButton.addEventListener("click", function() {
	task.style.textDecoration = "line-through";
	})
	})
}
