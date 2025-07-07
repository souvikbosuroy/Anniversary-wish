// let content = document.querySelector("p");
// console.log(content.getAttribute("name"));
// console.log(content.setAttribute("name" , "nam"));

// let outer = document.querySelector("#box");
// let contentText = document.querySelector("p");
// outer.style.backgroundColor = "#000";

// contentText.style.backgroundColor = "#fff";
// contentText.style.padding = "20px 30px";

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me";
// console.log(newBtn);

// let square = document.querySelector("#box");
// square.append(newBtn);
// // square.prepend(newBtn);
// // square.before(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<h1>Hi, I'm Souvik</h1>";

// document.querySelector("#box").prepend(newHeading);
// // newHeading.remove();
// document.querySelector("p").remove();

// let clickBtn = document.createElement("button");
// clickBtn.innerText = "Click Me";
// clickBtn.style.backgroundColor = "#f00";
// clickBtn.style.color = "#fff";

// document.querySelector("body").prepend(clickBtn);

// let content = document.querySelector(".text");
// content.innerHTML = content.classList.add("para");

let frontBox = document.querySelector(".front_box");

let helloGreet = document.querySelector("#hello");
helloGreet.style.color = "#fff";
helloGreet.style.fontSize = "90px";
helloGreet.style.lineHeight = "98px";

let sub_heading = document.querySelector(".sub_heading");
let dayCounter = document.querySelector("#day_counter");
let frontHiddenVideo = document.querySelector(".bg_video");

sub_heading.style.color = "#fff";
sub_heading.style.fontSize = "40px";
dayCounter.style.color = "#f00";
dayCounter.style.fontSize = "48px";

let i = 0;

let interval = setInterval(() => {
    dayCounter.textContent = i;
    i++;
    if (i > 608) clearInterval(interval);
}, 5); // update every 10ms

let showLove = document.createElement("button");
showLove.innerText = "Click and Smile :)";
showLove.classList.add("smile_btn")
sub_heading.after(showLove);

const audio = document.getElementById("bgAudio");

showLove.addEventListener("click", (singleClick) => {
    frontBox.style.backgroundColor = "transparent";
    frontBox.style.background = "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))";
    helloGreet.innerText = "I Love You for a Thousand Years";
    helloGreet.style.textAlign = "center";
    helloGreet.style.color = "#fff";
    sub_heading.style.color = "#fff";
    frontHiddenVideo.style.visibility = "visible";
    frontHiddenVideo.style.opacity = "1";
    frontHiddenVideo.style.zIndex = "-1";
    sub_heading.innerText = "Thank you for your patience towards me.\n" +
    "Thank you for always being there for me like a momma elephant takes care of her child.";
    sub_heading.style.textAlign = "center";
    sub_heading.style.fontSize = "18px";
    showLove.classList.add("transparent_btn");
    showLove.innerText = "Now, keep smiling my champ! We will achieve everything we have dreamt of.";
    audio.play().catch(err => {
        console.warn("Autoplay was blocked:", err);
    });
});