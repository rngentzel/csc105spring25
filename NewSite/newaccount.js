//document.querySelector("body").style.backgroundColor = "black";
//document.querySelector("body").style.color = "white";

$("document").ready(function() {
	//$("h1, p").css("color", "gray");
	//$("p:not(.error-message)").addClass("hidden");
	//$("body").css("background-color", "black");
	//$("body").css("color", "white");
	
	//JavaScript way
	/*let new_element = document.createElement("p");
	let body = document.querySelector("body");
	let first_p = document.querySelector("p");
	body.insertBefore(new_element, first_p);
	new_element.innerText = "Hello, world";*/
	
	//JQuery way
	/*let new_element = document.createElement("p");
	$("h1").after(new_element);
	new_element.innerText = "Hello, world";*/
	
	//Shorter JQuery way
	$("h1").after("<p>Hello, world</p>");
	
	//$("h1").remove();
	
	
	//JavaScript way
	/*for (const elem of document.querySelectorAll("label")) {
		elem.addEventListener("click", function() {
			this.classList.toggle("error-message");
		});
	}*/
	
	/*document.querySelectorAll("label").forEach(function(elem) {
		elem.addEventListener("click", function() {
			this.classList.toggle("error-message");
		});
	});*/
	
	//JQuery Way
	$("label").click(function () {
		this.classList.toggle("error-message");
	});
	
	/*$("label").on("click", function () {
		this.classList.toggle("error-message");
	});*/
});

let form_username = document.getElementById("username");
let form_pw = document.getElementById("password");
let form_verify = document.getElementById("verifypassword");
let submitbutton = document.getElementById("submitbutton");

let username_error = document.getElementById("username-error");
let password_error = document.getElementById("password-error");

function validate_username(username) {
	if (username.length == 0) {
		username_error.innerText = "Username can't be blank.";
		return false;
	} else if (username.length < 6) {
		username_error.innerText = "Username must be at least 6 characters.";
		return false;
	} else {
		username_error.innerText = "";
		return true;
	}
}

function validate_password(pw) {
	if (pw.length == 0) {
		password_error.innerText = "Password can't be blank.";
		return false;
	} else if (pw.length < 8) {
		password_error.innerText = "Password must be at least 8 characters.";
		return false;
	} else {
		password_error.innerText = "";
		return true;
	}
}

submitbutton.addEventListener("click", function (event) {
	let username_value = form_username.value;
	let password_value = form_pw.value;
	
	let verified = true;
	
	if (!validate_username(username_value)) {
		verified = false;
	}
	
	if (!validate_password(password_value)) {
		verified = false;
	}
	
	if (!verified) {
		event.preventDefault();
	}
	
	//Username must be nonempty
	//The passwords have to match
	//Password must be nonempty
	//Password must be at least 8 characters
});

form_username.addEventListener("input", function () {
	validate_username(form_username.value);
});

form_pw.addEventListener("input", function () {
	validate_password(form_pw.value);
});