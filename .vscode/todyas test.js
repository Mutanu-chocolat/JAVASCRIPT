//filtering by category,map to produce company names only,calculate age of company,//returning the comapany object with more date duration


const companies = [
    { name: "Company one", category: "Finance", start: "1981", end: "2007" },
    { name: "Company two", category: "Retail", start: "1954", end: "2017" },
    { name: "Company three", category: "Auto", start: "1985", end: "2009" },
    { name: "Company four", category: "Retail", start: "1990", end: "2023" },
    { name: "Company five", category: "Technology", start: "1981", end: "2021" },
    { name: "Company six", category: "Finance", start: "1956", end: "2007" },
    { name: "Company seven", category: "Auto", start: "1989", end: "2004" },
    { name: "Company eight", category: "Technology", start: "1978", end: "2023" },
    { name: "Company nine", category: "Retail", start: "1981", end: "2024" },
  ];
  const ages = [
    33,
    22,
    45,
    66,
    32,
    45,
    64,
    67,
    84,
    23,
    23,
    21,
    ,
    67,
    64,
    34,
    34,
    53,
  ];

  const filteredCompanies=companies 
  .filter((company)=>company.category==='Retail')
  .map(company=>company.name);
console.log(filteredCompanies);

const filteredcompanies1=companies
 .filter((company)=> company.category==='Finance')
 .map(company=>company.name);
 console.log(filteredcompanies1);


 const filteredcompanies2=companies
 .filter((company)=>company.category==='Auto')
 .map(company=>company.name);
 console.log(filteredcompanies2);

 const filteredcompanies3=companies
 .filter((company)=>company.category==='Technology')
 .map(company=>company.name);
 console.log(filteredcompanies3);
 
 
 companies.forEach(company => {
    const startYear = parseInt(company.start);
    const endYear = parseInt(company.end);
    const age = endYear - startYear;
    console.log(`${company.name} has an age of ${age} years.`);
  });

  //Company one has an age of 26 years.
 //Company two has an age of 63 years.
//  Company three has an age of 24 years.
 // Company four has an age of 33 years.
 // Company five has an age of 40 years.
 // Company six has an age of 51 years.
 // Company seven has an age of 15 years.
 // company eight has an age of 45 years.
 // Company nine has an age of 43 years.



 const longestDurationCompany = companies.reduce((acc, company) => {
    const startYear = parseInt(company.start);
    const endYear = parseInt(company.end);
    const duration = endYear - startYear;
  
    if (duration > acc.duration) {
      return { ...company, duration };
    } else {
      return acc;
    }
  }, { duration: 0 });
  
  console.log(longestDurationCompany);
