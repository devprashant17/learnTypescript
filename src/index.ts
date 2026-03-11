function DelayedCall(fn: ()=>void){
    setTimeout(fn,1000);
}

DelayedCall(()=>{
    console.log("HIII");
})