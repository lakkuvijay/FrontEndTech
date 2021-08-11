this.onmessage = function(e){
    if(e.data !=undefined ){
        let result = e.data.num1+e.data.num2;
        this.postMessage(result);
    }
};