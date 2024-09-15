//they are functions that either ACCEPT OTHER FUNCTIONS AS ARGUMENTA or
// RETURN OTHER FUNCTIONS AS RESULTS


    //examples of HOF accepting other functions as arguments
   /* function prepareDinner(guest, menuCustomizer) {
        // Prepare a meal based on the guest's preferences
        const customizedMenu = menuCustomizer(guest);
        console.log(`Dinner for ${guest}: ${customizedMenu}`);
    }
    
    function veganMenu(guest) {
        return "Vegan lasagna";
    }
    
    function carnivoreMenu(guest) {
        return "Steak with mashed potatoes";
    }
    
    // Usage
    prepareDinner("Alice", veganMenu);
    prepareDinner("Bob", carnivoreMenu);



    //example of HOF return other functions as results
    function createSpell(effect) {
        return function (target) {
            console.log(`Casting ${effect} on ${target}!`);
        };
    }
    
    const fireballSpell = createSpell("Fireball");
    const invisibilitySpell = createSpell("Invisibility");
    
    // Usage
    fireballSpell("dragon");
    invisibilitySpell("thief");*/

//EXAMPLES OF HOFs   1.Map
const numbers=[1,2,3,4,5,6,7];
const squaredNumbers=numbers.map((num)=>num*num);
console.log(squaredNumbers);//output:[1, 4, 9, 16, 25, 36, 49]

const numbers2=[1,2,3,4,5,6,7];
const multipliedNumbers=numbers2.map((num)=>num*5);
console.log(multipliedNumbers);//output:[5, 10, 15, 20, 25, 30, 35]

const numbers1=[1,2,3,4,5,6,7,]
const divedeNumbers=numbers1.map((num)=>num/2)
console.log(divedeNumbers)//output[[0.5, 1, 1.5, 2, 2.5, 3, 3.5]





//2. Filter
const number1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const evennumbers=number1.filter((num)=>num % 2===0);
console.log(evennumbers);//output[2, 4, 6, 8, 10, 12, 14]


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 22 },
    { name: 'Eve', age: 29 }
  ];

  const adults=people.filter((person)=>person.age >=18);
  console.log(adults);//output[{name: 'Alice', age: 25 },{name: 'Charlie', age: 30 },{name: 'David', age: 22}, {name: 'Eve', age: 29}]
  
const children = ["Alice", "Alicia", "bob", "Ali","Benny","Charlie" ];
const uniqueChildren=children.filter((children)=>children.startsWith("A"));
  console.log(uniqueChildren)//output[ 'Alice', 'Alicia', 'Ali' ]









