function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
fetch('Header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-header').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));

 fetch('Footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('site-footer').innerHTML = data;
  })
  .catch(error => console.error('Error loading header:', error));