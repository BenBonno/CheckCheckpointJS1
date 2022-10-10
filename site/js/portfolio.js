const avatar = document.querySelector(".avatar")
avatar.addEventListener("click", function () {

    if (avatar.src.endsWith("tar.svg") === true) {

        avatar.src = "./image/avatar-bis.png"
    }
    else if (avatar.src.endsWith("bis.png") === true) {
        avatar.src = "./image/avatar.svg"
    }

})


const nameInText = document.getElementById("name");
const bgColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text")
const button = document.querySelector(".button")
const allA = document.querySelectorAll(".a")
button.addEventListener("click", function () {
    let newName = prompt("Choose a new name");
    let color = prompt("Choose a color");
    nameInText.innerText = newName;
    nameInText.style.color = "white";
    bgColor.forEach(e => {
        e.style.background = color
    });
    console.log(textColor);
    textColor.forEach(element => {
        element.style.color = color;
        console.log(element);
    });
    allA.forEach(e => {
        e.style.color = color
    })
})



