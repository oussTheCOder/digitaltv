import { darkMode } from "./dark-mode.js";

document.addEventListener('DOMContentLoaded',function(){
    darkMode();
  })
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