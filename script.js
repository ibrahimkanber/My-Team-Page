const btn=document.getElementById("btn");
btn.addEventListener("click",change);
const day=document.querySelector(".day");
const night=document.querySelector(".night");


function change(){
    document.body.classList.toggle("Night");
    day.classList.toggle("day1");
    night.classList.toggle("night1")

}
