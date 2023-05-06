import * as bootstrap from 'bootstrap';
import lazyframe from "lazyframe";

var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000,
  wrap: false
});

const videoContainer = document.getElementById('videoContainer');
const lazyVideo = document.createElement('div');
lazyVideo.classList.add('lazyframe');
lazyVideo.setAttribute('data-vendor','youtube');
lazyVideo.setAttribute('data-src', "https://www.youtube.com/embed/Kq8NU4xx2Zc");
lazyVideo.setAttribute('data-autoplay', false);
lazyframe(lazyVideo,{
    lazyload: true,
    autoplay: false
});
videoContainer.appendChild(lazyVideo);