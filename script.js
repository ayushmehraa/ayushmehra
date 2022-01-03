const btn=document.querySelector("#navphbtn");
const blck=document.querySelector("#iconbox");

const phnav=document.querySelector("#navph");

// console.log( window.getComputedStyle(phnav).display);

var getelement=(element)=>{
    return window.getComputedStyle(element).display;
}
getelement(blck)

var dis=(element,blockk)=>{
    // btn
    return element.addEventListener("click",()=>{
        phnav.style.display=blockk

    })
}

dis(btn,getelement(blck));

var dis2=(element,blockk)=>{
    // btn
    return element.addEventListener("mouseenter",()=>{
        phnav.style.display=blockk

    })
}
dis2(btn,getelement(phnav));

