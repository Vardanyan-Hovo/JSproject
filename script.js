var users=[
  {
    name:"Hakob",
    lastname:"Hakobyan",
    Age:34,
    cauntry:"USA",
    gender : "Male",
},
   {
       name:"Karine",
       lastname:"Hakobyan",
       Age:24,
       cauntry:"USA",
       gender : "Female",
   },
   {
    name:"Hakob",
    lastname:"Davtyan",
    Age:23,
    cauntry:"Francie",
    gender : "Male",
},
   {
    name:"Hakob",
    lastname:"Hakobyan",
    Age:19,
    cauntry:"German",
    gender : "Male",
},
{
    name:"Anahit",
    lastname:"Avagyan",
    Age:18,
    cauntry:"Rasha",
    gender : "Female",
},
{
    name:"Hakob",
    lastname:"Hakobyan",
    cauntry:"Armenia",
    Age:19,
    gender : "Male",

},
{
    name:"hasmik",
    lastname:"minasyan",
    Age:30,
    cauntry:"Armenia",
    gender : "Female",
},
];


let filteranswer = document.querySelector("#filter_answer");
let fr = users;
tpel(fr);

let input_box = document.querySelector("#idinput");
let button_box = document.querySelector("#text_button");
let filter_nav=document.querySelector("#filters_nav");
let filtresselect=document.querySelector("#filters");
let update_button=document.querySelector("#update_button");
 ///////////////////////////   filters 3 //////////////////////////////////////////////////
 update_button.addEventListener('click' ,function()
     {
   let curentcountry=document.querySelector("#country-filter").value.toLocaleLowerCase();
   let gendercountry=document.querySelector("#gender-filter").value;
    let search = users.filter(function(user){
       return user.cauntry.toLocaleLowerCase().includes(curentcountry) && 
       user.gender.includes(gendercountry) && 
       user.name.toLocaleLowerCase().includes(input_box.value.toLocaleLowerCase())
      });
   tpel(search); 
     }
   );

//////////////////////////  long  /////////////////////////////////////////

let lbot=document.querySelectorAll(".login_button");
let logbox=document.querySelector("#login-box_ener");


lbot[0].addEventListener('click', openhidenlogo);
lbot[1].addEventListener('click', openhidenlogo);

function openhidenlogo()
  {
  if (logbox.style.display === "" || logbox.style.display === "none")
       {
    logbox.style.display = "block";
       }
       else {logbox.style.display="none";}
  }


  let emailinput=document.querySelector("#idemail");

  emailinput.addEventListener("keyup",function(e){
  let emailatribut=document.querySelector("#email_atribut");
  if(emailinput.value.includes("@"))
            {
            emailatribut.innerHTML = "Ok";
            emailatribut.style.color="white";
            }
        else 
          { 
          emailatribut.innerHTML = "invalid Email Address";
          emailatribut.style.color = "red";
          }
  });

///////////////////////    filters click //////////////////////////////

filter_nav.addEventListener("click",function()
   { 
 if(filtresselect.style.display === "" || filtresselect.style.display=== "none")
     {
   filtresselect.style.display = "block";
     }
     else {
        filtresselect.style.display="none"; 
          }
   }
  );

//////////////////////////shearch das't button  click ////////////////////////

input_box.addEventListener("keyup",function(e){//keydown arajin@ cuyc chi talis
 let fsearch = users.filter( function(user)
    {

  return user.name.toLocaleLowerCase().includes(input_box.value.toLocaleLowerCase());
    })
    if(fsearch === "")
       {  
      fsearch=users;
       }
    tpel(fsearch);
       });




///////////////////////     filtr click   name  //////////////////////////////

button_box.addEventListener("click",function()
         {
     fr=users.filter(function(user){
         console.log("users filter go");
      return user.name.toLocaleLowerCase().includes(input_box.value.toLocaleLowerCase());
            }
           )
           tpel(fr); 
         }
        );
////////////////////////////// tpel   /////////////////////////////////////////////
function tpel(fr)
  {
    filteranswer.innerHTML='';
  for(user of fr)
     {
 let newElemen=document.createElement("div");
 newElemen.classList.add("user_class");
 newElemen.innerHTML=
    `
    <h3> Name:      ${user.name} </h3>
    <p>  LastName:  ${user.lastname} </p>
    <p>  Age:       ${user.Age}  </p>
    <p>  cauntry:   ${user.cauntry}</p>
    <p>  gender:    ${user.gender}</p>
    `;
    filteranswer.appendChild(newElemen);
     }
  }