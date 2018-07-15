function add (a,b){
    console.log(a + b)
}

function double(a) {
    console.log("in double")
    add(a,a);
}

function printDouble(a) {
    console.log("in printDouble")
    let output = double(a);
    console.log(" output - ", output);
}

printDouble(9)

