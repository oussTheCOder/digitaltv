
//fetch data 
export const getJSON = async function(url){
    try{
        // const resp=await Promise.race([fetch(url),timeout(TIMEOUT_SEC)]);//over 5s timeout fires
        const resp=await fetch(url);
        const data= await resp.json();
        if(!resp.ok) throw new Error(`${data.message} ; ${data.status}`);
        return data;
    }catch(err){
        throw err;
    }
}
//void and update an object
export const voidAndUpdateObj = function(obj,newData){
    for(let key in obj ){
        if(obj.hasOwnProperty(key)){
            delete obj[key];
        }
    }
    for(let key in obj ){
        if(newData.hasOwnProperty(key)){
            obj[key]=newData[key];
        }
    }
    return obj;
   }
//show element 
export const showElement = function (element) {
    element.classList.remove("hidden");
    element.classList.add("block");
  }
//hide element
export const hideElement = function (element) {
    element.classList.remove("block");
    element.classList.add("hidden");
  }
//scrollToElement
export const scrollToElement = function (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({ behavior: "smooth" });
  }
//redirect to other page
export const redirectToOtherPage = function (domainName) {
    if(typeof(domainName)!=="string") return;
     window.open(domainName, "_blank");
  }
//check if an email is valid 
export  const  isValidEmail = function (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
//get contact form inputs
export const getContactFormUserDetails = function (formId){
    const form = document.getElementById (formId);
    const user = form.getElementsByTagName("input");
    const deviceInfor = form.getElementsByTagName("select");
    return [...user ,...deviceInfor];
}
//check field emptyness
export const isEmpty = function(value){
    if (  value === null || value === undefined ) return true;
    if (  typeof(value) === 'string' && value.trim() === '' ) return true;
    if (  Array.isArray (value) && value.length === 0 ) return true;
    if (  typeof(value) === 'object' && Object.keys(value).length === 0 ) return true;
    return false;
}

