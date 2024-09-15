const animal={
    name:"Dog",
    weight:15,
    units:"kg",
    sound:function producingsound() {
        console.log("the animal is producing some sound");
    },
};

const person= new Object();
person.name="John doe";
person.age= 90,
person.speak = function speaking(){
    console.log("a person speaking");
};
console.log(typeof person);
console.log(typeof animal);
console.log(person);
console.log(animal);

const color=[ "red", "green", "yellow "]

const numbers=Array("123", "456", "789", ) 

const numbers2=new Array()
numbers2[0]=23
numbers2[1]=456

console.log(typeof color);
console.log(typeof numbers);
console.log(typeof numbers2);

console.log(color[0]);
console.log(numbers[0]);
console.log(numbers2[1]);


const donkey=Object.create(animal)
donkey.name= "donkey"
console.log(donkey);
console.log(donkey.sound);
console.log(donkey.weight);