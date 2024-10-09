let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let text=document.getElementById("txt");

function genrateQr(){

    if(text.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
    }
    else{
        text.classList.add('error');
        setTimeout(()=>{
            text.classList.remove("error");
        },1000);
    }

}


const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    genrateQr();
})