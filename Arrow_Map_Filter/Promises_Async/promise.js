function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function callback(){
    console.log("Hi there");
}

setTimeoutPromisified(5000).then(callback);