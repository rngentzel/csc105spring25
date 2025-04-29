let my_new_var = 5;
let my_string = "Hello";

const my_array = [1, 2, 3, 4, 5];

console.log(my_array);

console.log(my_array[0]);

//Add to end
my_array.push(6);

console.log(my_array);

//Add at start
my_array.unshift(0);

console.log(my_array);

//Add at index 3
my_array.splice(3, 0, "Hello");

console.log(my_array);

//Remove last item
console.log(my_array.pop());

console.log(my_array);

//Remove first item
my_array.shift();

console.log(my_array);

//Remove from middle
my_array.splice(3, 1);

console.log(my_array);

console.log("Array size: " + my_array.length);

//for i in range(0,10)

for (let i = 0; i < 10; i++) {
	console.log(i);
}

let my_bool = true;
while (my_bool) {
	my_bool = false;
	console.log("While loop iteration");
}

do {
	console.log("Do While loop iteration");
} while (my_bool);


for (const ele of my_array) {
	console.log(ele);
}