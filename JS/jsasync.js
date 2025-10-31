//SYNCHRONOUS PROGRAMMING (here we use loop for delay date and gettime)
function register(cb){
    waitfortwoseconds()
console.log("register end");
cb();
}
function sendEmail(cb){
    waitfortwoseconds()
console.log("email send end");
cb();
}
function login(cb){
    waitfortwoseconds()
console.log("login end");
cb();
}
function getData(cb){
    waitfortwoseconds()
    console.log("get data end");
    cb();
}
function displayData(){
    console.log("display data end");
}
function waitfortwoseconds(){
const ms=new Date().getTime()+8000;         //this is 8000ms means 8sec delay
while(new Date().getTime()<ms)
{}
}
register();
sendEmail();
login();
getData();
displayData();
console.log("other application");

//ASYNCHRONOUS PROGRAMMING(here we use settimeout for delay)
function register(){
    setTimeout(()=>{
        console.log('register end')
    },1000);
}
function sendEmail(){
    setTimeout(()=>{
        console.log('email send end')
    },2000);
}
function login(){
    setTimeout(()=>{
        console.log('login end')
    },3000);
}
function getData(){
    setTimeout(()=>{
        console.log('get data end')
    },2000);
}
function displayData(){
        setTimeout(()=>{
        console.log('display data end')
    },1000);
}

register();
sendEmail();
login();
getData();
displayData();
console.log("other application");
//callback hell
register(()=>{
    sendEmail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            })
        })
    })
});                                      //this code ladder is not easily readable and understandable. this prob is called callback hell
console.log("other application");