function getImgSrcForBreakpoint(windowWidth) {
    var imgSrc = "images/large.jpg";

    if (windowWidth < 768) {
        imgSrc = "images/small.jpg";
    } else if (windowWidth >= 768 && windowWidth < 960) {
        imgSrc = "images/medium.jpg";
    }

    return imgSrc;
}

var hero = document.querySelector(".hero");
var img = new Image();
img.src = getImgSrcForBreakpoint(window.innerWidth);
img.onload = function() {
    hero.classList.add("loaded");
};

// The problem was I needed an image element, so I could add an onload event listener. So what I did was create a function to grab the background image being used for the hero, based on the correct window size. Created an empty image element. Since the image element is using the same image as the hero, I could use the onload listener on the new image I created through JS to determine when the background image was loaded for the hero. Once the background image was loaded, I added the .loaded class to the hero, which I used to set the opacity to 1.
