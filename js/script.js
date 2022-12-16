const share = document.querySelector(".profile__share")
const overlay = document.querySelector(".overlay")

share.addEventListener("click", () => {
    overlay.classList.toggle("show")
})