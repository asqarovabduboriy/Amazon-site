const btnModel = document.querySelector(".div-modal")
const model = document.querySelector(".modal")
const btnClose = document.querySelector(".btn-close");
const BtnCloseTwo = document.querySelector(".btn-close-sidebar");
const body = document.querySelector('body')

btnModel.addEventListener("click", ()=>{
    model.style.display = "block"
    body.style.background = '#ccc'
})

btnClose.addEventListener("click", ()=>{
    model.style.display = "none"
    body.style.background = "white"
})

const sidebar = document.querySelector(".sidebar")
const btnSidebar = document.querySelector(".btn-sidebar")

btnSidebar.addEventListener("click", ()=>{
    sidebar.classList.toggle("show");
    body.style.background = '#ccc'
})

BtnCloseTwo.addEventListener("click",()=>{
    sidebar.classList.toggle("show");
    body.style.background = "white"
})