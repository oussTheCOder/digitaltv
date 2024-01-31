
import { darkMode } from "../dark-mode.js";
import { getContactFormUserDetails, isEmpty, isValidEmail,
  scrollToElement , showElement , hideElement } from "../helper.js";

const productDetails = JSON.parse(localStorage.getItem("product-details"));
console.log(productDetails);

document.addEventListener('DOMContentLoaded',function(){
  darkMode();
//create imagePackage title
const packageImage = document.querySelector(".package-image");
const h3 = document.createElement("h3");
h3.className = "plan-title mb-4 text-xl text-center font-medium leading-none text-gray-900 dark:text-slate-300";
h3.textContent = productDetails.duration;
}) 
// render the selected plan data into the product details 
document.querySelectorAll(".plan-money").forEach(plan=>{
   plan.textContent = productDetails.price;
})
document.querySelector(".final-price").textContent =productDetails.price;
document.querySelector(".plan-duration").textContent = productDetails.duration;
// document.querySelector("#checkout_btn").dataset.sellixProduct=productDetails.productID;
//checkout form
const checkoutForm = document.getElementById("checkoutContactForm");
//checkout Button element
const submitCheckOutBtn = document.querySelector("#checkout-submit_btn");
//get all the input information elements from the form
const inputInforElements = getContactFormUserDetails("checkoutContactForm")
.filter(input=>input.classList.contains("user-info"));

const successForm = document.getElementById("successForm_msg");
const failForm = document.getElementById("failedForm_msg");





//handle from error
const isSomeInputVoid = inputInforElements
.some(input => isEmpty(input.value));

submitCheckOutBtn.addEventListener("click", (e) =>{
  hideElement(failForm);
  //boolean to check if some fields are empty
  const isSomeInputVoid = inputInforElements
  .some(input => isEmpty(input.value));
  //returns empty fields
  const voidInput = inputInforElements
  .filter(input=>isEmpty(input.value))
  if(isSomeInputVoid){
    showElement(failForm);
    if (window.innerWidth < 768) {
      scrollToElement(failForm);
    } 
    voidInput.forEach(voidInput=>{
      let errorEl = voidInput.nextElementSibling;
        errorEl.textContent = `${voidInput.name} is required!`
        showElement(errorEl)
    })
    return ;
  }
  showElement(successForm);
 inputInforElements.forEach (input=>{
  if(input.name === 'Full Name'){
    console.log(input.value)

  localStorage.setItem('name' , input.value );
  }
  if(input.name === 'Email'){
    console.log(input.value)

  localStorage.setItem('email' , input.value );
  }
  if(input.name === 'Phone Number'){
    console.log(input.value)
  localStorage.setItem('phone' , input.value );
  }
  
 })

  setTimeout(()=>{
     checkoutForm.submit();
  },2000)
})

inputInforElements.forEach( (input) => {
  input.addEventListener( "input" , (event) => {
 
    if( !isEmpty(input.value) ){
      hideElement(input.nextElementSibling);
      if(input.name === "email"){
        if(!isValidEmail(input.value)){
          let errorEl = input.nextElementSibling;
          errorEl.textContent = `${input.value}  is not a valid email!`
          showElement(errorEl)
        }
      }
    }
    // else{
    //   let errorEl = input.nextElementSibling;
    //   errorEl.textContent = `${input.name} is required!`
    //   showElement(errorEl)
    // }
  
  })
})
const changeDuration = function ( duration , durationDiv){
    if(duration === 'Een Maand'){
      durationDiv.textContent ='one month'
    }else if(duration === '3 Maanden'){
      durationDiv.textContent ='3 Months'
    }else if(duration === '6 Maanden'){
      durationDiv.textContent  ='6 Months'
    }else if(duration === '1 Jaar'){
      durationDiv.textContent  ='1 Year'
    }
}
changeDuration(productDetails.duration , document.querySelector(".plan-duration") )
//language switch
const lanDiv = document.querySelector(".switchLangDiv");
lanDiv.addEventListener("click", (e)=>{
  const target = e.target;
//1- toggle the language list when click
  if(target.closest('.currentLang')){
    console.log("hi")
    const languageOptionsEl = target.closest('.currentLang').nextElementSibling ;
    console.log(languageOptionsEl);
    if(languageOptionsEl.classList.contains('hidden')){
      languageOptionsEl.classList.remove("hidden");
      languageOptionsEl.classList.add("flex");
      
    }else{
      languageOptionsEl.classList.add("hidden");
      languageOptionsEl.classList.remove("flex");
    }
  }
}) 





// //checkout form
// const checkoutForm = document.getElementById("checkoutContactForm");

// // //checkout Button element
// const submitCheckOutBtn = document.getElementById("checkout_btn");
// console.log(submitCheckOutBtn);

//get all the input information elements from the form
// const inputInforElements = getContactFormInputs("checkoutContactForm")
// .filter(input=>input.classList.contains("input-infor"));
// console.log(inputInforElements);

// window.onload = function(){
//   submitCheckOutBtn.addEventListener('click' , (event)=>{
//     //handle errors and dont allow to process the paymant
//     inputInforElements.forEach(input=>{
//       if(input.value.trim() === ''){
//         console.log(`${input.name} is empty `);
//         //show the error 
//         const errorMsg = `please enter your ${input.name} `;
//         const errorEl = input.nextElementSibling ;
//         errorEl.textContent = errorMsg
//         showElement(errorEl);
//       }else{
//         const errorEl = input.nextElementSibling ;
//         hideElement(errorEl);
//       }
//     })
//     //allow paymant if the personal information has been provided
//     const isInforProvided = !inputInforElements.some(input=>input.value.trim()==='');
//     console.log("information provided ?" , isInforProvided)
//     if(isInforProvided){
//       console.log('you can send data to my gmail');
//       console.log('you can process the paymant');
//       submitCheckOutBtn.dataset.sellixProduct=productDetails.productID;
//       console.log(submitCheckOutBtn);

//     }
//   })
// }


  



