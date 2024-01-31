import { IMAGE_BASE_URL } from "./config.js";

class getMovieDetailsView {
    _targetMovie=document.querySelectorAll('.swiper-wrapper');
    _parentEl=document.querySelector(".movie-details");
    _movie;
    render(movie){
        const markup=this._generateMarkup(movie);
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin",markup);
    }
    _clear(){
        this._parentEl.innerHTML="";
      }
    addHandlerToCardResult(handler){
        document.addEventListener("click",(event)=>{
                handler(event);
              })
    }
   
    _generateMarkup(movie){
        return `
        
          
            <img class=" w-full h-full absolute block" style='filter: brightness(37%);
            -webkit-filter: brightness(37%);
            -moz-filter: brightness(37%);' src="${IMAGE_BASE_URL}/w500/${movie.backdrop}">

            <div class="absolute w-full p-4 py-40 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center  lg:flex-row" >
                <div class="movie-img mx-auto md:basis-1/2 border-2 p-2 border-white" style='max-width:380px'>
                    <img src="${IMAGE_BASE_URL}/w500/${movie.poster}" class="block w-full  rounded" alt="">
                </div>
                <div class="md:basis-1/2 relative">
                    <div class="">
                        <h1 class=" text-3xl text-center text-white mb-12 font-bold dark:text-white">Title : ${movie.title}</h1>
                        <div>
                            <div class="rate">
                                <div class="">
                                    
                                </div>   
                            </div>
                    </div>
                    <p class="overview max-w-2xl mx-auto text-center mb-6 font-light text-gray-200 md:w-9/12 lg:mb-8 md:text-lg lg:text-xl dark:text-blue-400">${movie.overview}</p>
                    <div class="text-center">
                        <a href="#pricing" class="watch-now_card inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800  focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            watch now
                        </a>
                    </div>
                </div>
            </div>
        
        `
    }
}
export default new getMovieDetailsView();