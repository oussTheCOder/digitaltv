
const containers = document.querySelectorAll(".x-scroll-el");
const scrollSpeed = 1;
let scrollAmount = 0;
export const slideImages = () =>{
  scrollAmount += scrollSpeed;
  containers.forEach((container)=>{
    container.scrollLeft = scrollAmount
    if(scrollAmount >= container.scrollWidth/2) scrollAmount = 0;
  })
}

