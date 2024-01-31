
 class popularChannelsView{
    _data;
    _parentEl=document.querySelector("#popular_channels");
    render(data){
      const markup=this._generateMarkup(data);
      this._clear();
      this._parentEl.insertAdjacentHTML("afterbegin",markup);
    }
    _clear(){
      this._parentEl.innerHTML="";
    }
    _generateMarkup(data){
    return data.map(result=>{
     console.log(result);
      return `
      <div class="swiper-slide relative cursor-pointer"                > 
      <img src="" class="block rounded"/> 
      </div>
      `
   }).join('');
  }  
}

export default new popularChannelsView();