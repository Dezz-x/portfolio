const scrollToTop = document.getElementById("back-to-top")

function topFunction (){
    document.body.scrollTo({top: 0, behavior:"smooth"});
    document.documentElement.scrollTo({top: 0, behavior: "smooth"});
}