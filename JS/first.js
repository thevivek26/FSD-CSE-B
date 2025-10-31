// const x=20; const mein jo bhi variable hoga we can't increase or decrease its value
console.log(a);
let e=10;
var a;
var b=6;
console.log(a);
{
    var c=7; 
    let d=9;
    console.log(b);
    console.log(c);
    console.log(e);
    console.log(d);
}
console.log(c);
function f1(user="guest")
{
    console.log(`Hello ${user}`)
}
f1();
f1('Ayush');
//Arrow Functions
const add=(a,b)=>a+b
//Normal function
function sum(a,b){
    console.log("Before return");
    return(a+b);
}
//arrow functions reduces lines of code
//IIFE function
(function()
{
    console.log("Inside IIFE");
}
)
();
//Callback Function
//Passing function as a parameter is called callback function
function f2(user,cb){
    console.log(`Hello ${user}`);
    login();
}
function login(){
    console.log("User logged in!!")
}
f2("ayush");
//Aynchronous Programming
// register()
// SendEmail()
// login()
// getData()
// DisplayData()

//Waiting in synchronous programming
function Waitfortwoseconds() {
    const ms = new Date().getTime() + 2000;
    while (new Date().getTime() < ms) {
    }
}

//synchronous programming
function register() {
    Waitfortwoseconds();
    console.log("register end");
}

register();

function SendEmail() {
    Waitfortwoseconds();
    console.log("email sent");
}

SendEmail();

function login() {
    Waitfortwoseconds();
    console.log("logged in");
}

login();

function getData() {
    Waitfortwoseconds();
    console.log("got data");
}

getData();

function displayData() {
    Waitfortwoseconds();
    console.log("data displayed");
}

displayData();
console.log("other application"); //printed after 10 sec beech mein 2-2 sec ke liye many times cpu free tha but ye exceute hi hua chala 10 sec baad hi


//Asynchronous prog
function register(){
    setTimeout(() => {
        console.log("register end");
    }, 2000);
}
function SendEmail(){
    setTimeout(() => {
        console.log("email sent");
    }, 2000);
}
function login(){
    setTimeout(() => {
        console.log("login");
    }, 2000);
}
function getData(){
    setTimeout(() => {
        console.log( "got data");
    }, 2000);
}
function displayData(){
    setTimeout(() => {
       console.log("data diaplayed");
    }, 2000);
}
register();
SendEmail();
login();
getData();
displayData();
console.log("other application");   //ye settimeout wala asynchronous prog tha 2 sec ka wait tha usme hi other application print hogya sabse pehle jo 2sec ka wait tha usme hi synchronous ki tarah 10 sec wait nhi kia but here order of execution is not fixed out of all these functions every time you execute it they wilol be executed in a different order kabhi koi function pehle kabhi koi

function register(cb){
    setTimeout(() => {
        console.log("register end");
        cb();
    }, 2000);
}
//Callback Hell
register((cb)=>{
    SendEmail((cb)=>{
        login((cb)=>{
            getData((cb)=>{
                displayData();
            })
        })
    })
})