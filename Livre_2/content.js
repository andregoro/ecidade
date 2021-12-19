//var myPort = browser.runtime.connect({name:"port-from-cs"});
//myPort.postMessage({greeting: "hello from content script"});

// myPort.onMessage.addListener(function(m) {
//   console.log("In content script, received message from background script: ");
//   console.log(m);
// });
// myPort.onMessage.addListener(function(m,r,s) {
//         alert(m);

//         // browser.tabs.onUpdated.addListener(cookieUpdate);      1
        
//         //     port.postMessage("Hi BackGround");

//         //     port.postMessage("Hi BackGround");
//         // browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         //         browser.tabs.sendMessage(tabs[0].id, { msg: "Button clicked", data: parsedTexFieldContent }, (response) => {

//         // });
//         // browser.tabs.query({active: true, currentWindow: true},function(tabs) {
//         //         chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//         //             console.log(response);
//         //         });
//         //       });
// });

    // 2. A page requested user data, respond with a copy of `user`

browser.runtime.onMessage.addListener(function(port) {
    if(port['ecidade']=="sprint"){
        document.body.style.border = "5px solid red"; 
    }
    if(port['ecidade']=="retaguarda"){
        document.body.style.border = "5px solid blue";
    }
});