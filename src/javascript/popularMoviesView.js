import { IMAGE_BASE_URL } from "./config.js";

 class popularMoviesView{
    _data;
    _parentEl=document.querySelector("#popular");
    _dropDownListItems=document.querySelector(".dropDown.popular");
    render(data){
      const markup=this._generateMarkup(data);
      this._clear();
      this._parentEl.insertAdjacentHTML("afterbegin",markup);
    }
    _clear(){
      this._parentEl.innerHTML="";
    }
    addHandlerToBtnResult(handler){
      this._dropDownListItems.addEventListener("click",(event)=>{
        event.preventDefault();
          handler(event);
      })
    }
    _generateMarkup(data){
    return data.map(result=>{
      return `  
      <div   class="swiper-slide popularSwiper relative cursor-pointer"
                data-id=" ${result.id}"
                data-title="${result.title||result.name}" 
                data-overview="${result.overview}"
                data-poster="${result.poster_path}"
                data-backdrop="${result.backdrop_path}"
                > 
      <img src="${IMAGE_BASE_URL}/w500/${result.poster_path}" class="block rounded"/> 
    
      </div>
    `
   }).join("");
  }  
}

export default new popularMoviesView();
                              