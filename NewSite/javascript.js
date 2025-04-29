const rammus_photobox_info = [["Images/SleepyRammus.jpg", "An orange cat sleeping on a couch.", "This is my cat Rammus."],
							  ["Images/HiThereRammus.jpg", "An orange cat curled up on a couch.", "Rammus lying on the couch. He do that."],
							  ["Images/BathtubRammus.jpg", "An orange cat sitting in a bathtub.", "Rammus hides in the bathtub sometimes when the frying pan is being used. He's sensitive to sounds."]
							  ];
const poppy_photobox_info = [["Images/PoppyWatchingTV.jpg", "A cat looking at birds on a stream on the TV.", "Poppy loves watching birds on the TV."],
							 ["Images/TwoCatsOnATree.jpg", "Two cats on a cat tree.", "She also likes the cat tree."]
							];


//alert("Hello, world.");

let my_var = "class";
var my_other_var = "other_class";

console.log("Hello, " + my_var + ".");

my_var = "world";

let button_counter = 0;

let is_sunday = true;
let is_thursday = false;

const PI = 3.1415926;

/*function clicked() {
	button_counter = button_counter + 1;	
	
	console.log("You have clicked this button " + button_counter + " times.");
	
	
	if (is_sunday) {
		console.log("Happy sunday!");
	} else if (is_thursday) {
		console.log("Happy thursday!");
		
		let area_circle = PI * button_counter * button_counter;
		console.log("The area of a circle with that radius would be " + area_circle);
		
	} else {
		console.log("It's not sunday...");
	}
}*/

let my_button = document.querySelector("#clickmebutton");
let delete_button = document.querySelector("#deletebutton");
let create_button = document.querySelector("#createbutton");
let button_counter_paragraph = document.querySelector("#button_counter");
//let delete_image_button = document.querySelector(".delete_image");

let main = document.querySelector("main");

let body = document.querySelector("body");

console.log(body);

let counter = 0;

my_button.addEventListener("click", function () {
	//counter = counter + 1;
	//counter += 1;
	counter++;
	
	button_counter_paragraph.innerText = counter;
	
	//console.log(this.innerText);
	//this.innerText = "Good job!";
}
);

delete_button.addEventListener("click", function () {
	//body.removeChild(button_counter_paragraph);
	//button_counter_paragraph.parentNode.removeChild(button_counter_paragraph);
	button_counter_paragraph.remove();
});

let paragraph_counter = 0;

create_button.addEventListener("click", function () {
	let new_paragraph = document.createElement("p");
	paragraph_counter++;
	new_paragraph.innerText = "Hello, world #" + paragraph_counter;
	
	//body.appendChild(new_paragraph);
	
	body.insertBefore(new_paragraph, main);
	
	console.log(new_paragraph);
});


/*delete_image_button.addEventListener("click", function () {
	console.log("Clicked");
	let my_parent = this.parentNode;
	my_parent.remove();
	
	
	//this.parentNode.remove();
	//body.appendChild(my_parent);
});*/

function add_photobox(photobox_info, photoalbum) {
	let new_div = document.createElement("div");
	new_div.classList.add("photobox");
	
	let new_image = document.createElement("img");
	new_image.src = photobox_info[0];
	new_image.alt = photobox_info[1];
	
	let new_delete_button = document.createElement("button");
	new_delete_button.classList.add("delete_image");
	new_delete_button.innerText = "Hide";
	
	let new_paragraph = document.createElement("p");
	new_paragraph.innerText = photobox_info[2];
	
	new_div.appendChild(new_image);
	new_div.appendChild(new_delete_button);
	new_div.appendChild(new_paragraph);
		
	photoalbum.appendChild(new_div);
	
	new_delete_button.addEventListener("click", function () {
		this.parentNode.remove();
	});
	
	return new_div;
}

//Add photoboxes to HTML
function populate_album(albumID, photoboxInfo, albumArray) {
	let photoalbum = document.querySelector(albumID);

	for (const photobox_info of photoboxInfo) {
		let new_div = add_photobox(photobox_info, photoalbum);
	
		albumArray.push(new_div);
	}
}

const rammus_album = [];
const poppy_album = [];

populate_album("#rammusalbum", rammus_photobox_info, rammus_album);
populate_album("#poppyalbum", poppy_photobox_info, poppy_album);

console.log(rammus_album);
console.log(poppy_album);


/*const photoboxes = document.querySelectorAll(".photobox");

for (const photobox of photoboxes) {
	console.log(photobox);
	
	let new_delete_button = document.createElement("button");
	new_delete_button.classList.add("delete_image");
	new_delete_button.innerText = "Hide";
		
	photobox.insertBefore(new_delete_button, photobox.children[1]);
	
	new_delete_button.addEventListener("click", function () {
		this.parentNode.remove();
	});
}*/

let searchbox = document.querySelector("#searchbox");

searchbox.addEventListener("keyup", function () {
	let searchtext = searchbox.value;
	console.log("Searching time");
	console.log(searchtext);
	
	for (const photobox of rammus_album) {
		let paragraph = photobox.querySelector("p");
		let paragraph_text = paragraph.innerText;
		
		if (paragraph_text.includes(searchtext)) {
			photobox.classList.remove("hidden");
			//photobox.style.display = "block";
		} else {
			photobox.classList.add("hidden");
			//photobox.style.display = "none";
		}
	}
});



//Adding user-submitted images
let submitbutton = document.querySelector("#submitcatpic");

let form_email = document.getElementById("new_email");
let form_image = document.getElementById("new_image");
let form_alt = document.getElementById("new_alt");
let form_caption = document.getElementById("new_caption");
let form_cat = document.getElementById("new_cat");

let alt_caption_error = document.getElementById("alt_caption_equal_error");
let carlow_email_error = document.getElementById("carlow_email_error");

submitbutton.addEventListener("click", function (event) {
	let new_email = form_email.value;
	let new_alt = form_alt.value;
	let new_caption = form_caption.value;
	
	if (new_alt == new_caption) {	//Form not valid because fields are equal
		event.preventDefault();	//Don't submit the form
		alt_caption_error.classList.remove("hidden");	//Error message visible
	} else {
		alt_caption_error.classList.add("hidden");	//Error message hidden
	}
	
	
	if (!new_email.includes("carlow.edu")) {
		event.preventDefault();	//Don't submit the form
		carlow_email_error.classList.remove("hidden");	//Error message visible
	} else {
		carlow_email_error.classList.add("hidden");	//Error message hidden
	}
	
	
	/*console.log("Submit button clicked");
	
	let new_image = form_image.value;
	let new_alt = form_alt.value;
	let new_caption = form_caption.value;
	let new_cat = form_cat.value;
	
	console.log(new_image);
	console.log(new_alt);
	console.log(new_caption);
	console.log(new_cat);
	
	const photobox_info = [new_image, new_alt, new_caption];
	
	let new_cat_id = new_cat + "album";
	let photoalbum = document.getElementById(new_cat_id);
	
	if (new_cat == "rammus") {
		let new_div = add_photobox(photobox_info, photoalbum);
		rammus_album.push(new_div);
	} else {
		poppy_album.push(add_photobox(photobox_info, photoalbum));
	}*/
});