// asynchronous function set timeout is used to create delay and it requires callback function
function register(cb){
    setTimeout(()=>{
console.log("register end");
cb();
    },5000)
}
function sendEmail(cb){
    setTimeout(()=>{
        cb();
console.log("email send end");
    },1000)
}
function login(cb){
    setTimeout(()=>{
        cb();
console.log("login end");
    },3000)
}
function getData(cb){
    setTimeout(()=>{
        cb();
console.log("get data end");
    },2000)
}
function displayData(){
    setTimeout(()=>{
console.log("display data end");
    },5000)}

// register();
// sendEmail();
// login();
// getData();
// displayData();
// console.log("other application");  
//total ecxecution time is 5 sec in async sabse pehle 5sec ki window mili toh other application chala phir baaki sab ek saath chal gaye bcz of 5 sec window time milte hi chalenge but 25 sec in sync so async is better but here order will get wrong like its not necessary ki pehle register chale then email then login then get data then displaydata they can be executed in any order which is wrong to solve this we have callback , promise and async and await three methods.

//asynchronous with callback performance better and sequence or order maintained 
//callbackHell
register(function(){
    sendEmail(function(){
        login(function(){
            getData(function(){
                displayData();
            });
        });
    });
});
console.log("other application");  
//this code is perfect in working no prob but readibility of this code is the problem and this prob is known as callback hell and solution o fthis prob is promise.