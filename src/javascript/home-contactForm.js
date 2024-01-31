import { getContactFormInputs,isEmpty } from "./helper.js";
//set the logic of the contact form
  //show a message if one field or more is empty 


export const handleContactMessage = function(event){
    console.log("submitted");
    const successMsgDiv = document.getElementById("successForm_msg");
    const failedMsgDiv = document.getElementById("failedForm_msg");
    const inputsArr = getContactFormInputs("home-contactForm");
    
    inputsArr.filter((input)=>!input.classList.contains('helpInput'))
    .forEach((inputArr)=>{
        console.log(inputArr);
        if(isEmpty(inputArr.value)){
                event.preventDefault();
                inputArr.nextElementSibling.classList.remove("hidden");
                failedMsgDiv.classList.remove("hidden");
                inputArr.nextElementSibling.textContent=`please add ${inputArr.name}`;
            }else{
                inputArr.nextElementSibling.classList.add("hidden");
              }
        })

        const isAllFieldsFilled=inputsArr.every(input=>!isEmpty(input.value));

        if(isAllFieldsFilled){
            
            failedMsgDiv.classList.add("hidden");
            successMsgDiv.classList.remove("hidden");

            setTimeout(() => {
            successMsgDiv.classList.add("hidden");
            document.getElementById("checkoutContactForm").reset();
            }, 5000);
        }
    }
  
  