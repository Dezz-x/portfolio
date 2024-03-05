const scrollToTop = document.getElementById("back-to-top")
scrollToTop.addEventListener("click", topFunction())

function topFunction (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function(){scrollFunction()};

function scrollFunction (){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        scrollToTop.style.display = "block";
    }else {
        scrollToTop.style.display= "none";
    }
}
