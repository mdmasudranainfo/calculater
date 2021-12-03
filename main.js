

















function myf(x){
    calculate.value+=x;

};
function calcu(){
    calculate.value = eval(calculate.value );
    if(calculate.value== "undefined"){
        calculate.value=null;
    }
    
};
function clearAll(){
    calculate.value= null;

};

