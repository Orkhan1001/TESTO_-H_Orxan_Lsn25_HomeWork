window.addEventListener("scroll", function(){
    var nav = this.document.getElementById("idNavbar");
    var li = this.document.getElementsByClassName("tColorChangers");
    console.log(li);
    nav.classList.toggle("tWhiteNav", window.scrollY > 0);

    for(let i = 0; i < li.length; i++){
        li[i].classList.toggle("tBlackItem", window.scrollY > 0);
        console.log("for")
    }
})



function tDropDown(){
    var control = document.getElementById("tCheck");
    var drop =  document.getElementById("id_dropdown");
    if(!control.checked){
       drop.style.top = "90px";
    }
    else{
        drop.style.top = "-700px";
    }
}

function fScrollUp(){
    window.scrollTo(0, 0);
}


window.onscroll = function() {scrollFunction()};

var up = document.getElementById("id_up");
function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    up.style.display = "flex";
  } else {
    up.style.display = "none";
  }
}