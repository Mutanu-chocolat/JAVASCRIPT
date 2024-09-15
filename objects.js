const user={
    name:"Spectre",
    calculateAge: function getAge(yob){
        let age= 2024 - yob
        console.log( user.name, " is now" ," ", + age + " years old")
    },
    isKenyan:true,
    likesMotorbikes:true,
    height:6.1,
    role:"software developer",
    skills:["coding","gynmastics","aerobics","swimming"],
    favColor:"black",
    favDrink:"predator"
}

/* console.log(user.likesMotorbikes) */
//json(javascript object notation) data excahnge format -- used by API and other systems in communication 
//usng bracket notation--use the key in double quotes
console.log(user["favColor"] + "\n" + typeof user.favColor)
user.calculateAge(2001)

//a function insde an object is called a method for that object
// you can create an obkect using object literals ie) using the curly brackets and also using the constructor () method.