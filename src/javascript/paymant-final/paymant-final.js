import { darkMode } from "./../dark-mode.js";



document.addEventListener('DOMContentLoaded',function(){
    darkMode();
  })
const productDetails = JSON.parse(localStorage.getItem("product-details"));

const nameText = localStorage.getItem("name");
const priceText = productDetails.price
const userName = document.querySelector(".name-of-user");
const priceEl = document.querySelector(".order-price");
userName.textContent = nameText ;
priceEl.textContent = priceText ;
//random number for order number
const orderNumText = Math.floor(Math.random() * (901) + 1000);
const orderNumEl = document.querySelector(".order-number");
orderNumEl.textContent = orderNumText ;



//copy to clip board 
const copyBtn = document.querySelectorAll(".copy-btn");

const copyToClipBoard = function(text){
  const preserver = document.createElement("textarea");
  preserver.innerHTML = text;
  navigator.clipboard.writeText(preserver.value);
}

copyBtn.forEach ((btn)=>{

  btn.addEventListener('click',(event)=>{
    const target = event.target.closest( ".copy-btn" );
    const textToCopie = target.previousElementSibling.textContent; 
    target.innerHTML = `
        <span class="text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"  class="w-4 h-4 inline">
          <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
        </svg>
        <span class='text-cyan-400' >copied!</span>
        </span>
    `
    setTimeout(()=>{
          target.innerHTML = `<span class=" text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
          </svg>
          <span class="text-cyan-400 text-sm">copy</span>`
    },2000)
    copyToClipBoard(textToCopie);
  })

})




