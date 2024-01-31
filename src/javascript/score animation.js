
const handleScoreAnim = function(el,targetScore) {
    let currentScore = 0;
    const duration = 2000;
    let intervalDuration = 10;
    let increment = targetScore / (duration / intervalDuration);
    const inceaseScores = setInterval(() => {
      currentScore+=increment;
      el.textContent = `${Math.floor(currentScore)}`
      if(currentScore === targetScore){
        clearInterval(inceaseScores);
      }
    },intervalDuration);
  
  }
  
  const scoreSection = document.getElementById("scores");
  
  export const animateScores = function (){
  
    let observer = new IntersectionObserver(entries=>{
    
      entries.forEach(entry=>{
        if(entry.isIntersecting) {
         handleScoreAnim(document.getElementById("active-users_count"),400);
         handleScoreAnim(document.getElementById("sport-channels_count"),2000);
         handleScoreAnim(document.getElementById("channels_count"),21000);
         handleScoreAnim(document.getElementById("movies_count"),160000);
          observer.disconnect();
        }
      })
    
    })
    observer.observe(scoreSection);
  }
  