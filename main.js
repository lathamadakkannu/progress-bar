const progressbar=document.getElementById("bar");
const loading=document.getElementById("loading");

let barwidth=0;
const download=()=>{
    barwidth++;
    progressbar.style.width=`${barwidth}%`
    setTimeout(()=>{
        loading.innerHTML=(barwidth===100)? `${barwidth}% Download Completed`: `${barwidth}% Download in Progress`
    },1000)
   
}
download()

setTimeout(()=>{

   let interval= setInterval(()=>{
    if(barwidth===100){
        clearInterval(interval)
    }
    else{
        download()
    }
    },100)
},2000)