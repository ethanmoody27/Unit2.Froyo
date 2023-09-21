const userInput = prompt(
    "Please enter a list of your friends' favorite ice-cream flavors",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee, chocolate, strawberry"
)
console.log(userInput);

const splitString = userInput.split(",");

console.log(splitString);

function recordFlavors(splitString){
    for (let i = 0; i < splitString.length; i++){
        console.log(splitString[i]);
    }
}

recordFlavors(splitString);

const flavorsObject = {}

for (let i = 0; i < splitString.length; i++) {
    const flavor = splitString[i].trim();
    if (flavorsObject[flavor]) {
        flavorsObject[flavor]++;
    } else {
        flavorsObject[flavor] = 1;
    }
}

console.log("Flavors count:", flavorsObject);

console.table(flavorsObject);