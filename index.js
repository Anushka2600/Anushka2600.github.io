
var aboutmebtn = document.querySelector(".aboutmebtn");
var educationbtn = document.querySelector(".educationbtn");
var activitiesbtn = document.querySelector(".activitiesbtn");
var contactbtn = document.querySelector(".contactbtn");
var aboutme = document.querySelector("#aboutme");
var education = document.querySelector("#education");
var hobbies = document.querySelector("#hobbies");
var contactme = document.querySelector("#contactme");
var intro = document.querySelector(".intro");

aboutmebtn.addEventListener("click",function(){
	aboutme.classList.toggle("hidden");
	education.classList.add("hidden");
	hobbies.classList.add("hidden");
	contactme.classList.add("hidden");
	intro.style.backgroundColor = "#FFE4E1";

})

educationbtn.addEventListener("click",function(){
	aboutme.classList.add("hidden");
	education.classList.toggle("hidden");
	hobbies.classList.add("hidden");
	contactme.classList.add("hidden");
	intro.style.backgroundColor = "	#FFB6C1";
})

activitiesbtn.addEventListener("click",function(){
	hobbies.classList.toggle("hidden");
	aboutme.classList.add("hidden");
	education.classList.add("hidden");
	contactme.classList.add("hidden");
	intro.style.backgroundColor = "	#FFDAB9";
})

contactbtn.addEventListener("click",function(){
	aboutme.classList.add("hidden");
	contactme.classList.toggle("hidden");
	hobbies.classList.add("hidden");
	education.classList.add("hidden");
	intro.style.backgroundColor = "	#FA8072";
})