console.log("js loaded");

// // setInterval will call a function
// // every Nms

// let count = 0;
// function printCountAndIncrement(){
//     count++;
//     console.log(count);
// }

// // call our function every 3 seconds
// setInterval(printCountAndIncrement, 3000)

// 0, 1, 2
let imageURLS = [
    "./images/randomImage1.avif",
   "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc=",
   "https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699"
];

//replace the 1st image witht he 2nd image<
//replace the 2nd image with the 3rd image
//when we run out of images, start back at the qst?

const slideShowImage = document.getElementById('slide-show-image');
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

prevButton.addEventListener("click", () => {
    updateImage(false)
});

nextButton.addEventListener("click", () => {
 updateImage(true)
});

//use set interval to updat the image every 3 seconds
let currentImageIndex = 0;

//move to the next image
//upadt the dom to show it
//keep track of the current index
//direction=either "prev" or "next"
function updateImage(direction){
    if(direction == "next"){
        currentImageIndex++;
    }else if (direction == "prev"){
        currentImageIndex--;
    }else{
        currentImageIndex++;
    }

    if(currentImageIndex >= imageURLS.length){
        currentImageIndex = 0;
    }

    if(currentImageIndex < 0){
        currentImageIndex = imageURLS.length - 1;
    }
    slideShowImage.src = imageURLS[currentImageIndex];
}

setInterval(updateImage, 5000);