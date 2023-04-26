let saturate= document.getElementById("saturate");
let contrast= document.getElementById("contrast");
let brightness= document.getElementById("brightness");
let blur= document.getElementById("blur");
let huerotate= document.getElementById("hue-rotate");

let upload= document.getElementById("upload");
let download= document.getElementById("download");
let Dw= document.getElementById("Dw");
let remember= document.getElementById("remember");
let img= document.getElementById("img");
let canvas= document.getElementById("canvas");


let reset= document.querySelector('span');
let imgbox= document.querySelector('.img-box');
let filters=document.querySelectorAll("ul li input")
let can= canvas.getContext('2d');



window.onload=function () {
    Dw.style.display='none';
    reset.style.display='none';
    imgbox.style.display='none';  
}
upload.onchange =function () {
    if (!remember.checked) {
         ResetValue();
    }
   
    Dw.style.display='block';
    reset.style.display='block';
    imgbox.style.display='block';
    let file =new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
      img.src=file.result;  
    }
    img.onload= function () {
        canvas.width=img.width;
        canvas.height=img.height;
        can.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display='none';
    }
    
}

filters.forEach(filter => {
    filter.addEventListener('input' , function(){
        can.filter=`
         saturate(${saturate.value}%)
         contrast(${contrast.value}%)
         brightness(${brightness.value}%)
         blur(${blur.value}px)
         hue-rotate(${huerotate.value}deg)        
        `
        can.drawImage(img,0,0,canvas.width,canvas.height);

        
        
    })
})

function ResetValue() {
    can.filter='none';
    can.drawImage(img,0,0,canvas.width,canvas.height);
    saturate.value='100';
    contrast.value='100';
    brightness.value='100';
    blur.value='0';    
    huerotate.value='0';

}


Dw.onclick = function () {
    download.href=canvas.toDataURL();
    download.click();
}