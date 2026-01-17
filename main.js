

//header//

let nav=document.querySelector(".navbar");
window.onscroll =function(){
    if(this.document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}