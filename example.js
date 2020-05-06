function greet(callback) {
    console.log("what is call back function?\n");
    var obj = {
        name: 'run my code',
        name2: 'to know what it mean' 
    }
    callback(obj);
}
greet(function(obj){
    console.log(obj.name ,'', obj.name2 ,'\n');
    console.log(" A function passed to some other function, will be invoked ar some point");
    
});
