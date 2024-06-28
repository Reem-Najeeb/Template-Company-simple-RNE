// // let toggle = document.querySelector('.icon-toggle');
// let headerContainer = document.querySelector('.container');
// let navLink = document.querySelector('.content-togle');
// document.querySelector('.icon-toggle').onclick = () =>{
//     headerContainer.classList.toggle('active');
//     navLink.classList.toggle('active');
// }


const nvbar = document.querySelector('header .container');
const toggleIcon = document.querySelector('.navbtn-toggle i');
const toggleIconi1 = document.querySelector('.i1');
const toggleIconi2 = document.querySelector('.i2');
// const toggleicon = document.querySelectorAll(".navbtn-toggle i");
// toggleicon.forEach((etogg)=>{
//     etogg.addEventListener("click" , (e) => {
//         e.target.parentElement.querySelectorAll(".active").forEach(element => {
//             element.classList.remove("active");
//         });
//         e.target.classList.add("active"); 
//     });
// });


toggleIconi1.addEventListener('click' , ()=>{
    toggleIconi1.classList.toggle('active');
    toggleIconi2.classList.toggle('active');
    nvbar.classList.toggle('show-sidebar');
});

toggleIconi2.addEventListener('click' , ()=>{
    toggleIconi1.classList.toggle('active');
    toggleIconi2.classList.toggle('active');
    nvbar.classList.toggle('show-sidebar');
});

// 
/* ================================ */
let btnTop = document.querySelector(".btn-to-up");
window.onscroll =function(){
    if(window.scrollY >= 500){
        btnTop.style.display = "block";
        console.log("OK");
        console.log(window.scrollY);
    }else{
        btnTop.style.display = "none";
    }
}
btnTop.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth",
    })
}
