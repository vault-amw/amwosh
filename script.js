// Toggle main mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function closeMenuIfClickedOutside(event) {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');

    if (
        navLinks &&
        hamburger &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        navLinks.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
}
//slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  if (x.length > 0) {
    x[myIndex-1].style.display = "block";  
  }
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
// Async load header and footer then bind events
async function loadHeaderAndFooter() {
    try {
        const headerRes = await fetch('Header.html');
        const headerHTML = await headerRes.text();
        document.getElementById('site-header').innerHTML = headerHTML;

        // After header is loaded, bind hamburger and dropdown toggles
        const hamburger = document.querySelector('.hamburger-menu');
        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }
        setupDropdownToggles(); // Bind dropdown toggle functionality
    } catch (err) {
        console.error('Failed to load header:', err);
    }

    try {
        const footerRes = await fetch('Footer.html');
        const footerHTML = await footerRes.text();
        document.getElementById('site-footer').innerHTML = footerHTML;
    } catch (err) {
        console.error('Failed to load footer:', err);
    }
}

// Run on DOM ready
window.addEventListener('DOMContentLoaded', () => {
    loadHeaderAndFooter();
    document.addEventListener('click', closeMenuIfClickedOutside);
});