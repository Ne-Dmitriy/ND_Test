let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
	let result = 0;

	let a1 = document.getElementById("q1").value;
	if (a1 === "1097"){
		result++; 
	}  
	
	alert("Количество правильных ответов: " + result); 
}   