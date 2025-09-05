const btnSuccess=document.querySelector("#success")
const btnError=document.querySelector("#error")
const btnInvalid=document.querySelector("#invalid")

const toastBox=document.querySelector(".toast-box")

let SuccessMsg=` <i id="success-icon" class="fa-solid fa-circle-check"></i>`;

let btn=()=>{
    let toast=document.createElement("div")
    let icon = document.createElement(SuccessMsg);
    let desc=document.createElement(span)
    toast.appendChild(icon,desc)
    
}

btnSuccess.addEventListener("click",()=>{

})