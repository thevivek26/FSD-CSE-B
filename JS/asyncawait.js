//in promise the problem was again ladder created of .then and again readibility is prob this was solved by async and await
function register() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("register end");
            resolve();
        }, 5000);
    });
}

function sendEmail() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("email send end");
            resolve();
        }, 5000);
    });
}

function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("login end");
            resolve();
        }, 5000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("get data end");
            resolve();
        }, 5000);
    });
}

function displayData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("display data end");
            resolve();
        }, 5000);
    });
}


async function main() {
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
    console.log("All tasks finished");
}

main();

console.log("other application");
//no .then ladder is created we simply generally call functions as usual better performance better readibility also