let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
	let result = 0;

	let a1 = document.getElementById("q1").value;
	if (a1 === "862"){
		result++;  
	} 

	let a2 = document.getElementById("q2").value;
	if (a2 === "882"){
		result++; 
	}  
	
	let a3 = document.getElementById("q3").value;
	if (a3 === "907"){
		result++; 
	} 
	
	let a4 = document.getElementById("q4").value;
	if (a4 === "941-944"){ 
		result++; 
	}
	if (a4 === "941,944"){ 
		result++; 
	}  
	
	let a5 = document.getElementById("q5").value;
	if (a5 === "964-972"){
		result++; 
	} 
	
	let a6 = document.getElementById("q6").value;
	if (a6 === "988"){
		result++; 
	} 
	
	let a7 = document.getElementById("q7").value;
	if (a7 === "1016"){
		result++; 
	} 
	if (a7 === "X"){
		result++; 
	}
	if (a7 === "XI"){
		result++;  
	}
	
	let a8 = document.getElementById("q8").value;
	if (a8 === "1097"){
		result++; 
	}
	
	let a9 = document.getElementById("q9").value;
	if (a9 === "1110"){
		result++; 
	} 
	if (a9 === "XII"){
		result++; 
	}
	if (a9 === "1117"){
		result++; 
	}
	if (a9 === "начало XII"){
		result++; 
	}
	if (a9 === "Начало XII"){
		result++; 
	}
	if (a9 === "НАЧАЛО XII"){
		result++; 
	} 
	
	
	let a10 = document.getElementById("q10").value;
	if (a10 === "1147"){
		result++;   
	} 
	
	alert("Количество правильных ответов: " + result); 
}   
 
