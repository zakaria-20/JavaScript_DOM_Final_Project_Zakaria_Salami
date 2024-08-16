// const navLinks = document.querySelectorAll('.link');
// const tabPanes = document.querySelectorAll('.tab');
// navLinks.forEach((link, index) => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();
//             console.log("ssssss",link);
            
           
//             navLinks.forEach(nav => nav.classList.remove('active'));
//             tabPanes.forEach(pane => pane.classList.remove('show', 'active','fade'));

            
//             link.classList.add('active');

//             tabPanes[index].classList.add('show', 'active','fade');
//         });
//     });
//script carousel 1
// let containers = document.querySelectorAll(".carousel-container");
// let currentIndex = 0;

// const slideImage = (index, container) => {
//     let slides = container.querySelectorAll(".slide");
//     let camera = container.querySelector(".carousel");
//     let slideWidth = slides[0].clientWidth;
//     let indicators = container.querySelectorAll('.indicator');

   
//     if (index < 0) {
//         index = slides.length - 1;
//     } else if (index >= slides.length) {
//         index = 0;
//     }

//     indicators.forEach(indicator => {
//         indicator.classList.remove('activeIndicator');
//     });
//     indicators[index].classList.add("activeIndicator");

   
//     camera.style.transform = `translateX(-${slideWidth * index}px)`;
//     currentIndex = index;
// };


// containers.forEach(container => {
 
//     let slides = container.querySelectorAll(".slide");
//     let indicatorsGrp = document.createElement("div");
//     indicatorsGrp.classList.add("indicators-grp");
//     container.appendChild(indicatorsGrp);

//     slides.forEach((slide, i) => {
//         let indicator = document.createElement("div");
//         indicator.classList.add("indicator");
//         indicatorsGrp.appendChild(indicator);
        
      
//         indicator.addEventListener("click", () => {
//             slideImage(i, container);
//         });
//     });

//     indicatorsGrp.querySelector(".indicator").classList.add('activeIndicator');

    

// });
//modal
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
//responsive nav bar
// let menu=document.querySelector(".menu1")
// let nav=document.querySelector(".nav-links")
// let close=document.querySelector(".close1")
// menu.addEventListener("click",()=>{
//     nav.style.display="flex"
// })
// close.addEventListener("click",()=>{
//     nav.style.display="none"
// })
