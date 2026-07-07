// function copyText(icon) {
//   const text = icon.previousElementSibling.innerText;
//   navigator.clipboard.writeText(text).then(() => {
//     icon.classList.replace("bi-copy", "bi-check"); // changes icon to checkmark
//     setTimeout(() => {
//       icon.classList.replace("bi-check", "bi-copy"); // revert back after 1.5s
//     }, 1500);
//   });
// }