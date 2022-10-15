import * as GSAP from './node_modules/gsap/all.js';

var imageIndex = 0;
var content = document.getElementById("gallery__content");

function GotoStart()
{
    content.style.marginLeft = 0;
}

function SwapImage()
{
    if(imageIndex == 2)
    {
        imageIndex = 0;
        var t = GSAP.gsap.to("#gallery__content", {marginLeft: -(1013*3), duration: 1, onComplete: GotoStart, ease: GSAP.Power2.easeInOut });
    }
    else{
        imageIndex = imageIndex + 1 % 3;
        GSAP.gsap.to("#gallery__content", {marginLeft: -(1013*imageIndex), duration: 1, ease: GSAP.Power2.easeInOut });
    }
    
}

while(true)
{
    SwapImage();
    await new Promise(r => setTimeout(r, 4000));
}