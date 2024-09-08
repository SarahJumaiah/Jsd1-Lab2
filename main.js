//1
var eatsPlants = false;
var eatsAnimals = true;
var eatsPlants = true;
var eatsAnimals = false;

                        //      yes         else 
var category = eatsPlants ? "herbivore" : "carnivore";
console.log(category);

var category = (eatsPlants && eatsAnimals) ? "omnivore" : "undefined";
console.log(category);

//2
var musicians = 3;

 if(musicians <= 0){
    console.log("not a group")
 }

 else if(musicians === 1){
    console.log("solo")
 }

 else if(musicians === 2){
    console.log("duet")
 }

 else if(musicians === 3){
    console.log("trio")
 }

 else if(musicians === 4){
    console.log("quartet")
 }

 else if (musicians> 4) {
    console.log("this is a large group")
 }

 //3
 var room = "billiards";
 var suspect = "Mr. Parkes"; 
 var weapon = "";
 var solved = false;
 
 if(room === "billiards" && suspect === "Mrs. Sparr"){
    weapon = "pool stick";
    solved = true;
 }
 else if(room === "ballroom" && suspect === "Mr. Kalehoff"){
    weapon = "poison";
    solved = true;
 }
 else if(room === "dining" && suspect === "Mr. Parkes"){
    weapon = "knife";
    solved = true;
 }
 else if(room === "gallery" && suspect === "Ms. Van Cleve"){
    weapon = "trophy";
    solved = true;
 }

 else if(solved === true){
    console.log("Mystrey solved")
 }
 else {
    console.log("Mystrey not solved")
 }

 //4
var balance = -325;
var checkBalance = true;
var isActive = true;

 if(checkBalance === true && isActive === true )(
    console.log("Your Balance is",balance,'and your Account is Active')
)

else  if(checkBalance === true && isActive === false ){
    console.log("your Account is not Active")
}

//5
let flavor = "vanilla"
let vessel = "bowl"
let toppings = "peanuts"

if (flavor==="vanilla" || flavor ==="chocolate" && vessel === "cone" || vessel === "bowl" && toppings === "sprinkles" || toppings === "peanuts" ){
    console.log(`I'd like two scoops of ${flavor} ice cream in a ${vessel} with ${toppings}.`)
}




