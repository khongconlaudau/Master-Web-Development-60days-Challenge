//The setInterval function in JavaScript is used to repeatedly call a function or execute a code snippet, with a fixed time delay between each call

const intervalId =
    setInterval(() => {
        console.log("This function will be executed every 2 secs")
    }, 2000);

// The Timeout acts the same with Thread.sleep in java
// clear interval
setTimeout(() => {
    clearInterval(intervalId);
    console.log("This function will be executed after 3secs")
}, 10000);

