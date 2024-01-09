// toggoler hude on cleark 
let navBar =document.querySelectorAll(".nav-link");
let navClolapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navClolapse.classList.remove("show");
    })

})



// active navBar 

// let nav =document.querySelector(".navigation-wrap");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add(" scroll-on");

//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

function checkAge() {
    var age = document.getElementById('age').value;
    var resultContainer = document.getElementById('result');

    if (age >= 18) {
        resultContainer.innerHTML = '<h3>You are an adult</h3>';
    } else {
        resultContainer.innerHTML = '<h3>You are a child</h3>';
    }

    resultContainer.style.display = 'block';
}






