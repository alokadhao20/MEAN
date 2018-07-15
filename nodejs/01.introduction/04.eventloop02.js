function executeData(a,b) {
    setTimeout(() => {
        console.log(a+b);
    },10000);   
};

executeData(5,5);
executeData(15,15);

console.log("After executeData")
