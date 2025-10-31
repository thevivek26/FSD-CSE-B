function register(){
    waitforfiveseconds();
console.log("register end");

}
function sendEmail(){
    waitforfiveseconds();
console.log("email send end");

}
function login(){
    waitforfiveseconds();
console.log("login end");

}
function getData(){
    waitforfiveseconds();
    console.log("get data end");
}
function displayData(){
    waitforfiveseconds();
    console.log("display data end");
}
function waitforfiveseconds(){                    //delay by loop
const ms=new Date().getTime()+5000;
while(new Date().getTime()<ms){

}
}
register();
sendEmail();
login();
getData();
displayData();
console.log("other application");     //even after 5sec delay this will run after 25 sec only in last 5sec ki window mein time hone ke baad bhi nhi chalega