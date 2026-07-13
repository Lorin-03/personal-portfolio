// const navLinks = document.querySelectorAll('.nav-links li a');

// navLinks.forEach(link => {
//   link.addEventListener('click', function () {
//     navLinks.forEach(l => l.classList.remove('active')); // remove from all
//     this.classList.add('active'); // add to clicked one
//   });
// });

// const navLinks = document.querySelectorAll('.nav-links li a');
// const tabPanels = document.querySelectorAll('.tab-panel');

// navLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault(); // stops page from jumping

//     // remove active from all links
//     navLinks.forEach(l => l.classList.remove('active'));

//     // remove active from all panels
//     tabPanels.forEach(panel => panel.classList.remove('active'));

//     // add active to clicked link
//     this.classList.add('active');

//     // show the matching panel
//     const target = this.getAttribute('data-tab');
//     document.getElementById(target).classList.add('active');
//   });
// });

const navLinks = document.querySelectorAll('.nav-links li a');
const tabPanels = document.querySelectorAll('.tab-panel');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // remove active from all links and panels
    navLinks.forEach(l => l.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // add active to clicked link and matching panel
    this.classList.add('active');
    const target = this.getAttribute('data-tab');
    document.getElementById(target).classList.add('active');
  });
});