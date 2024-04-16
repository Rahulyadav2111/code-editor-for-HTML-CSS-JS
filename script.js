let iFrame = document.querySelector("#output");
let inputs = document.querySelectorAll("textarea")
let htmlCode, cssCode, jsCode='';
inputs.forEach((el, index) =>{
    el.addEventListener("keyup", ()=>{
        if(index==0){
            htmlCode= el.value;
        }
        if(index==1){
            cssCode= el.value;
            
        }
        if(index==2){
            
            jsCode= el.value;
        }

        iFrame.contentDocument.body.innerHTML = htmlCode;
        
        iFrame.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
        
        iFrame.contentWindow.eval(jsCode);
    })
})