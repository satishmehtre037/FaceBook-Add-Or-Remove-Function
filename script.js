var istatus = document.querySelector("h5")
var main = document.querySelector("body")
var crsr = document.querySelector(".cursor")
var flag = 0

var addFrnd = document.querySelector("#Add")

addFrnd.addEventListener("click", function(){
    if(flag == 0){
        addFrnd.innerHTML= "Remove Friend"
        istatus.innerHTML= "Friends"
        istatus.style.color= "yellow"
        flag = 1

    }else{
        addFrnd.innerHTML= "Add Friend"
        istatus.innerHTML= "Stranger"
        istatus.style.color= "red"
        flag = 0
    }


})


main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"


})