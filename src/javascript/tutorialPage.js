import { darkMode } from "./dark-mode.js";

document.addEventListener('DOMContentLoaded',function(){
    darkMode();
  })

//handling switch between user device options 
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

const activateTab = (tabIndex)=>{
   tabBtns[tabIndex].classList.add("active-tab");
   tabContents[tabIndex].classList.remove("hidden");
}

tabBtns.forEach( (tabBtn,index) => {
  tabBtn.addEventListener("click",(e)=>{
    tabBtns.forEach(btn=>btn.classList.remove("active-tab"));
    tabContents.forEach(tab=>tab.classList.add("hidden"));
    activateTab(index);
  })
})


//language switch
const lanDiv = document.querySelector(".switchLangDiv");
lanDiv.addEventListener("click", (e)=>{
  const target = e.target;
//1- toggle the language list when click
  if(target.closest('.currentLang')){
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
