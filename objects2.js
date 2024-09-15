const hospital={
    name:"Community Hospital",
    address:{
        street:"123 main street",
        city:"anytown",
        state:"state",
        zip:"12345",

    },
    departments:[
        {
            name: "emergency",
            Headdoctor:{
                name:"Dr Smith",
                specialty:"Emmergency Medicine",
                age:"45",
                isBoardCertified:true,
            },
        },
           
        {
            name: "Pediatrics",
            Headdoctor:{
                name:"Dr Johnson",
                specialty:"pediatrics",
                age:"55",
                isBoardCertified:true,
            },
        },
        
    ],
    contactInfo:{
        phone:"555-222-348",
        email:"info@communityhospital.com",
        website:"https://www.communityhospital.com"
    }
};
//access name of hospital 
//name oh head doctor of emmergency department
//street addres s of the hospital
//email of the hospital
//the speciality of the headdoctor of pediatric dep

console.log(hospital.name)
console.log(hospital.departments[0].Headdoctor.name);
console.log(hospital.address['street']);
console.log(hospital.contactInfo.email);
console.log(hospital.departments[1].Headdoctor.specialty);