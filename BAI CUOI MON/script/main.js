const headerToggle = document.querySelector(".header__bars");
const headerList = document.querySelector(".header__list");
const headerItem= document.querySelectorAll(".header__item");
const headerLink=document.querySelectorAll(".header__link");


headerToggle.addEventListener("click", function(){
    headerList.classList.add("isExpand");
})

window.addEventListener("click" , function(e){
    if(!headerList.contains(e.target) && !e.target.matches(".header__bars"))
    headerList.classList.remove("isExpand");
  
})

const header=document.querySelector(".header")

const scrollDown= function(){
    var y=window.scrollY;
    
    if(y> 100){
        header.style.background="#bd90cc"; 
        
    }else{
        header.style.background="transparent";
    }
}

window.addEventListener('scroll', scrollDown);


const askHeaders=document.querySelectorAll(".ask__header-top")
const askItems=document.querySelectorAll(".ask__acc-item")



for (var i = 0 ; i < askItems.length ; i++){
    askItems[i].addEventListener("click", function(){
        this.classList.toggle("is-active");
        // if(this.className.includes("is-active")){
        //     this.classList.remove("is-active");
        // }
        // var panel = this.nextElementSibling;
        // if (panel.className.includes(is-active)) {
        //  this.classList.remove("is-active");
        // } else {
        // panel.style.display = "block";
        // }
    })
}


