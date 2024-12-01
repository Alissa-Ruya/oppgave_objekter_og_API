//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
const persons = [
    { firstName:"Liam",     lastName:"Bennett",     age:32,     jop:true},
    { firstName:"James",    lastName:"Carter",      age:46,     jop:true},
    { firstName:"Sophia",   lastName:"Martinez",    age:19,     jop:false},
    { firstName:"Emily",    lastName:"Thompson",    age:20,     jop:true},
    { firstName:"Oliver",   lastName:"Johnson",     age:17,     jop:false} 
];

//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
console.log(persons[0].firstName); //dot notation
console.log(persons[0]["lastName"]); //bracket notation

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------
persons.forEach(person=>{
    person.fullName=function(){
        return `${this.firstName} ${this.lastName}`;
    };
});
console.log(persons[1].fullName());

//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------
persons[2].age +=1;
persons[2].jop=!persons[2].jop;
console.log(persons[2]);

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------
function fotballPubben(person){
    if(person.age>18){
        console.log(`${person.fullName()}:party time!`);
    } else {
        console.log(`${person.fullName()}:too young.`);
    }
}
persons.forEach(person=> fotballPubben(person));
//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------
function university (person, degreeType){
    if(degreeType==="bachelors"){
        person.age +=3;
        person.degree="bachelors";
        person.studentLoan=60000;
    }else if(degreeType==="masters"){
        person.age+=2;
        person.degree="masters";
        person.studentLoan=40000;
    }
}
university(persons[3],"bachelors");
console.log(persons[3]);




 // I got a little help from chatgpt on the 7th and bonus questions. !!

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

async function fetchDogs(breed = "retriever") {
    const url = `https://dog.ceo/api/breed/${breed}/images/random/4`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Breed not found or network error.");
      }
      const data = await response.json();
  
      
      document.getElementById("dog1").src = data.message[0];
      document.getElementById("dog2").src = data.message[1];
      document.getElementById("dog3").src = data.message[2];
      document.getElementById("dog4").src = data.message[3];
    } catch (error) {
      console.error("Error fetching dog images:", error);
      alert("Error: " + error.message);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    fetchDogs(); 
  });

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------

function changeBreed() {
    const breedInput = prompt("Enter the breed of dog you want to see:");
    if (breedInput) {
      fetchDogs(breedInput.toLowerCase().trim());
    }
  }
  
  
  const button = document.createElement("button");
  button.textContent = "Change Breed";
  button.style.marginTop = "20px";
  button.onclick = changeBreed;
  document.body.appendChild(button);