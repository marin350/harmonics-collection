// goal: offer a button that when clicked adds toppings to the hot dog
// through javascript access style document to increase opacity of image 2 to appear when button is clicked


function hotDog(){
    var hotDog = document.getElementById("hotdog2")
    hotdog2.style.opacity = "100"
}

function coke(){
    console.log("click detected")
    var emptycoke = document.getElementById("emptycoke")
    var fullcoke = document.getElementById("coke")
    emptycoke.style.opacity = "100%"
    fullcoke.style.opacity = "0"
}

function fish(){
    var fish = document.getElementById("img-3")
    fish.style.animationDuration = "6s"
    fish.style.animationName = "fish-2"
}