
let imgQr = document.getElementById("imgQr");
let imageQr = document.getElementById("imageQr");
let Qrtxt = document.getElementById("Qrtxt");

let btn = document.getElementById("btn");


function GenerateQR(){
   if(Qrtxt.value.length > 0){
    imageQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtxt.value;
    // imgQr.classList.add("show-img");
   }else{
    Qrtxt.classList.add('error');
    setTimeout(()=>{
        Qrtxt.classList.remove('error');
    },1000);
   }
}

btn.addEventListener('click', GenerateQR);