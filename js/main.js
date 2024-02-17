const trailer = document.querySelector(".trailer")
const video = document.querySelector("#videotrailer")

document.getElementById("opentrailer").addEventListener("click", () => {
    video.play()
    trailer.classList.toggle("hidden")
})
document.getElementById("close-trailer").addEventListener("click", () => {
    video.pause()
    trailer.classList.add("hidden")
})