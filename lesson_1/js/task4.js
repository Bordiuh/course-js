function myFunction(arg1){
    return function(arg2){
        alert(`${arg1 + arg2}`);
    };
}
myFunction("Hello,","World!");


