window.onscroll=function () {
    let top = document.getElementById("b2t");

    
    if (window.pageYOffset > 784) {
        top.style.display = "block";
      
    }
    else {
        top.style.display = "none";
    }
}