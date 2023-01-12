// Code for FAQ

const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));





// Code for TOC Observer

const headings = document.querySelectorAll("[id^=point]"); // all element whose id begins with "point"
const links = document.querySelectorAll(".toc .toc__link");
// console.log("targets", headings);
// console.log("links", links);

const options = {
  root: document,
  threshold: 1.0,
  rootMargin: "80px 0px 0px 0px"
};

const observer = new IntersectionObserver((entries) => {
  // Each entry describes an intersection change for one observed
  // target element:
  // entry.target
  // entry.isIntersecting
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((link) => {
        // console.log(entry.target.id);
        // console.log(link.getAttribute("href"));
        if (`#${entry.target.id}` === link.getAttribute("href")) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });
}, options);

headings.forEach((heading) => observer.observe(heading));






 // Show TOC when scroll down
 window.addEventListener("scroll", function () { showFunction() });

 function showFunction() {
     if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
         document.getElementById("toc").style.display = "block";
     } else {
         document.getElementById("toc").style.display = "none";
     }
 }





 // Reading Progress Bar

 const readingProgress = document.querySelector('.reading-progress');
 const footerHeight = 250;
 document.addEventListener('scroll', function (e) {
     let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight - footerHeight) * 100;
     readingProgress.style.setProperty('width', w + '%');
 });

