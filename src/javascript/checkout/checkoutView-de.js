
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
//create imagePackage image
// const img = document.createElement("img");
// img.className = "plan-img relative bottom-6 block" ;
// const imgUrl = `src/img/plan/${productDetails.imageName}.webp`
// console.log(imgUrl);
// img.src = imgUrl ;
// img.src = `https://via.placeholder.com/300` ;
// img.alt = '';
//append them
// packageImage.prepend(h3); 
// packageImage.appendChild(img);
// console.log(img);
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
  if(duration === 'One Month'){
    durationDiv.textContent ='Een Maand'
  }else if(duration === '3 Months'){
    durationDiv.textContent ='3 Maanden'
  }else if(duration === '6 Months'){
    durationDiv.textContent  ='6 Maanden'
  }else if(duration === '1 Year'){
    durationDiv.textContent  ='1 Jaar'
  }
}

changeDuration(productDetails.duration , document.querySelector(".plan-duration"))

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

  /*

<div class="flex gap-2">
                   <p class="text-base mb-6   text-slate-700 dark:text-slate-500">
                       You can use a free IPTV App like IPTV SMARTERS PRO but for better
                       performance we recommand to use a paid IPTV App like: IBO PLAYER PRO or NETIPTV..
                   </p>
                </div>
              

                <h1 class="font-bold mb-6 text-gray-500 sm:text-xl dark:text-gray-400">How to setup IPTV on Android Devices ?</h1>
                <div class="flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2563eb" class="w-6 h-6 ">
                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                    </svg>
                   <p class="text-base mb-6 underline  text-slate-700 dark:text-slate-500">
                       Paid Option
                   </p>
                </div>
                <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 01 </span>: You can download <span class="text-blue-600 uppercase">NetIPTV</span>, <span class="text-blue-700 uppercase">ibo player pro</span> ,or <span class="text-blue-600 uppercase">Smart IPTV</span> from their official websites.</p>
                <p class="font-light mb-4 text-gray-500  dark:text-gray-400"> <span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 02 </span>: After the installation,open the app you will find MAC address on screen.</p>
                <p class=" font-light mb-4 text-center text-gray-500 sm:text-lg dark:text-gray-400">
                    <p class="hidden font-light  text-gray-500 sm:text-lg dark:text-gray-400"><span class="text-yellow-300">Ex:</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="rgb(250,220,22)" class="w-6 h-6 inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                      </svg>
                    </p>
                  <div class="mb-4"><img src="img/tutorial/iptv-setup-smart-img.webp" class="hidden w-full h-full rounded-md" alt="get the mac address"></div>
                </p>
                <p class="font-light mb-4 text-gray-500  dark:text-gray-400">
                    <span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 03 </span>: Send us the MAC address via Whatsapp / Email.
               </p>
               <p class="font-light mb-4 text-gray-500  dark:text-gray-400">
                <span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 04 </span>: After a few minutes,restart/reboot your TV and Open the app.
               </p>
            <div class="max-w-216 my-10 mx-auto  bg-slate-400 dark:bg-slate-600 rounded-sm h-1"></div>
            
               <div class="flex gap-2 mb-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2563eb" class="w-6 h-6 ">
                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clip-rule="evenodd" />
                   </svg>
                  <p class="text-base mb-6 underline  text-slate-700 dark:text-slate-500">
                   Free Option
                   </p> 
               </div>
               <p class="font-light mb-4 text-gray-500  dark:text-gray-400">
                After the installation follow those steps :
               </p>
               <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 01 </span>: Open the app once downloaded and Enter the login details. </p>
               <div class="mb-4"><img src="img/tutorial/smarters-pro-img.webp" class="w-full h-full rounded-md" alt="get the mac address"></div>
               <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 02 </span>: Enter the login details that we have provided you after you get a subscription with us. </p>
               <div class="flex items-center mb-4 gap-4">
                <p class="inline-block font-light ml-4 text-gray-500 sm:text-lg dark:text-gray-400">Now Click on “ADD USER” to proceed to the next section.</p>     
               </div>
               <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 03 </span>: Wait some seconds.. </p>
               <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 04 </span>: Now click on “Live TV” icon as depicted in the image </p>
               <div class="mb-4 "><img src="img/tutorial/smarters-pro-2-img.webp" class="w-full h-full rounded-md " alt="get the mac address"></div>
               <p class="font-light  mb-4 text-gray-500  dark:text-gray-400"><span class="text-base  uppercase font-bold underline text-slate-700 dark:text-slate-500">Step 04 </span>: Now you must click on the channel name and then double click on the small screen to turn into full screen as the final step done. </p>
               <p class=" text-blue-700 font-bold mt-10 sm:text-xl ">
                Thank You
               </p>

  */