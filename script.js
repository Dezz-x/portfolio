const scrollToTop = document.getElementById("back-to-top")

function topFunction (){
    document.body.scrollTo({top: 0, behavior:"smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
}

window.onscroll = function(){scrollFunction()};

function scrollFunction (){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        scrollToTop.style.display = "block";
    }else {
        scrollToTop.style.display= "none";
    }
}
