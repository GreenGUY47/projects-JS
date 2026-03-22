const btn = document.querySelector(".btn")
const clock = document.querySelector(".clockDigital")
const details = document.querySelector(".timeDetail")

let current = 1;


setInterval(function() {
    if (current === 2) {  // current === 2 means clock is showing
        clock.innerHTML = new Date().toLocaleTimeString()
    }
}, 1000)

function togglebtn() {
    if (current === 1) {
        clock.innerHTML = new Date().toLocaleTimeString()  // show time immediately on click
        clock.style.display = "flex"
        clock.classList.add("appear")
        details.classList.add("detailsAppear")
        clock.classList.remove("disappear")
        btn.classList.add("cbtn")
        current = 2;

    } else {
        clock.classList.add("disappear")
        clock.classList.remove("appear")
          details.classList.remove("detailsAppear")
        btn.classList.remove("cbtn")
        current = 1;

        clock.addEventListener("animationend", function() {
            clock.style.display = "none"
        }, { once: true })
    }
}
details.innerHTML = new Date().toLocaleDateString(undefined,{
    weekday: 'long', year:'2-digit', month:'long', day:'numeric'
})
let limit = 1
setInterval(function(){
    if(limit === 1){
        btn.classList.add("scalebtn")
        btn.style.backgroundColor = "crimson"
        limit = 2
    }else{
        btn.classList.remove("scalebtn")
        btn.style.backgroundColor = "royalblue"
        limit = 1
    }
},1000)