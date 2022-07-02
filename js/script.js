window.onscroll = function () {
  myFunction();
};

let footer = document.querySelector("footer");
let sticky = footer.offsetTop + footer.offsetHeight;

const myFunction = () => {
  if (window.pageYOffset <= sticky) {
    footer.classList.add("sticky");
  } else {
    footer.classList.remove("sticky");
  }
};
