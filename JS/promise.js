//solution to callback hell is promise
function register() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        }, 3000);
    });
}

function sendEmail() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("email send end");
            resolve();
        }, 3000);
    });
}

function login() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 3000);
    });
}

function getData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("get data failed");
            reject();
        }, 3000);
    });
}

function displayData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("display data end");
            resolve();
        }, 3000);
    });
}


register()
    .then(sendEmail)
    .then(login)
    .then(getData)
    .then(displayData)
    .catch((err) => {
        console.log("Error:",err);
    });

console.log("other application");

//in promise the problem is again ladder created of .then and again readibility is prob this was solved by async and await