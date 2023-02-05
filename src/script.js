window.onload = () => {
  const burger = document.querySelector(".burger-ico")
  const nav = document.querySelector("nav .links")

  burger.style.opacity = nav.classList.contains("hide") ?  1 : 0.5;

  burger.onclick = () => {
    const has = nav.classList.contains("hide")
    burger.style.opacity = has ?  0.5 : 1;
    nav.classList[has ? 'remove' : 'add']("hide")    
  }
}