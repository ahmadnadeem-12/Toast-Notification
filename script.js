const btnSuccess=document.querySelector("#success")
const btnError=document.querySelector("#error")
const btnInvalid=document.querySelector("#invalid")

const toastBox=document.querySelector(".toast-box")

let successMsg=`<i class="fa-solid fa-circle-check"></i> Successfully Submitted. `
let errorMsg=`<i class="fa-solid fa-circle-xmark"></i> Please Fix the error!`
let invalidMsg=`<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again. `

function Showing(msg){
    let toast=document.createElement("div")
    toast.classList.add('toast')
    toast.innerHTML=msg;
    toastBox.appendChild(toast);

    if(msg.includes("error")){
        toast.classList.add("error")
    }
    if(msg.includes("Invalid")){
        toast.classList.add("invalid")
    }
    
    setTimeout(() => {
        toast.remove()
    }, 5000);
}

btnSuccess.addEventListener("click",()=>{
    Showing(successMsg)
})
btnError.addEventListener("click",()=>{
    Showing(errorMsg)
})
btnInvalid.addEventListener("click",()=>{
    Showing(invalidMsg)
})
