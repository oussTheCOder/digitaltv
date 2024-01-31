import * as model from './model.js';
import { voidAndUpdateObj } from './helper.js';
import popularMoviesView from './popularMoviesView.js';
import {darkMode} from "./dark-mode.js";
import {swiper} from './swiper.js';
import { swiperReviews } from "./swiperReviews.js";
import { slideImages } from './channels scroll.js';
import { animateScores } from './score animation.js';

document.addEventListener('DOMContentLoaded',function(){
  loadResults();
  darkMode();
})
        // Function to update the content of the <p> element
        function updateContent() {
            // Get the <p> element by its id
            var paragraph = document.getElementById("dynamicText");
            console.log(paragraph)

            // Array of different content to cycle through
            var contentArray = [
                "2 devices - 1 year Plan <span class='text-lg text-red md:text-xl'>+ 6 </span><span class='text-red'>months extra</span>",
                "1 year Plan <span class='text-lg text-red md:text-xl'>+ 3 <span class='text-red'>months extra</span>",
                "6 months Plan <span class='text-lg text-red md:text-xl'>+ 1 <span class='text-red'>month extra</span>"
                // Add more content as needed
            ];

            // Get a random index from the array
            var randomIndex = Math.floor(Math.random() * contentArray.length);

            // Update the content of the <p> element
            paragraph.innerHTML = contentArray[randomIndex];
        }

        // Set up an interval to call the updateContent function every 5 seconds (5000 milliseconds)
        setInterval(updateContent, 4000);
// Set the date we're counting down to
var countDownDate = new Date("jan 16, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
clearInterval(x);
document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);
// make pricing link blue when intersect with pricing section???????
const pricingSection = document.getElementById("pricing");
const pricingLink = document.getElementById("pricing-link")
const changeLinkColorInter = function(targetEl,linkEl){
  let observer = new IntersectionObserver(entries=>{
  
    entries.forEach(entry=>{
      if(entry.isIntersecting) {
        console.log(linkEl);
        linkEl.classList.remove('text-gray-900');
        linkEl.classList.add('text-blue-500');
        console.log("is intersect")
      }else{
        console.log("not intersect")
      }
    })
  
  })
  observer.observe(targetEl);
}
changeLinkColorInter(pricingSection,pricingLink);
// ?????????????????????????????????????????????????????????


const loadResults=async function(){
  try{
    await model.loadResultsOf("popular","movie");
    popularMoviesView.render(model.state.movie.popular);
  }
  catch(err){
    console.log(err);
  }
}


const clickDrophandler = async function(e){

  e.stopImmediatePropagation();
  const target=e.target;
  console.log("trending");
  //change dropdown's text
  const targetdrop=target.closest(".dropDown")
  targetdrop.previousElementSibling.firstElementChild.textContent=target.textContent;
  //GET QUERY.
  const queryObj=JSON.parse(target.getAttribute("data-query"));
  console.log("query Object",queryObj);
  const {query,queryOption}=queryObj;
  //render new data.
  if(!targetdrop.classList.contains("popular")) return;
  await model.loadResultsOf(queryOption,query);
  popularMoviesView.render(model.state[`${query}`][`${queryOption}`]);
}
popularMoviesView.addHandlerToBtnResult(clickDrophandler);

document.querySelectorAll(".plan-btn").forEach(btn=>{

   btn.addEventListener("click",(e)=>{
     const targetPlan=e.target.closest(".plan-item");
     localStorage.setItem("product-details",targetPlan.dataset.proDetails);
    })

  })
  
  //slide channels logo
  setInterval(slideImages,10);
  
  //scores animation 
  animateScores();
  
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


  