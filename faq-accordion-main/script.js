const ans=document.querySelectorAll(".ans");
const plus=document.querySelectorAll(".plus");
const minus= document.querySelectorAll(".minus");

for(let i=0;i < plus.length;i++) {
    plus[i].addEventListener("click",function(event){
        event.preventDefault();
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        ans[i].classList.toggle("hidden");
    });
};

for(let i=0;i < minus.length;i++) {
    minus[i].addEventListener("click",function(event){
        event.preventDefault();
        plus[i].classList.toggle("hidden");
        minus[i].classList.toggle("hidden");
        ans[i].classList.toggle("hidden");
    });
};


