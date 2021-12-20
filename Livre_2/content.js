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
    var login=null;
    var senha=null;
    var enter=null;
    window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);

    function checkForJS_Finish () {
        if (    typeof SOME_GLOBAL_VAR != "undefined"
            ||  document.querySelector ("SOME_INDICATOR_NODE_css_SELECTOR")
        ) {
            clearInterval (jsInitChecktimer);
            // DO YOUR STUFF HERE.
        }
    }
}
browser.runtime.onMessage.addListener(function(port) {
    if(port['ecidade']=="sprint"){

        login=document.getElementById('usu_login');
        login.value='suporte02';

        senha=document.getElementById('usu_senha');
        senha.value='';

        enter=document.getElementById('btnlogar');
        enter.click();
    }
    if(port['ecidade']=="retaguarda"){

        login=document.getElementById('usu_login');
        login.value='andreoliveira';
        btnlogar
        senha=document.getElementById('usu_senha');
        senha.value='15907';

        enter=document.getElementById('btnlogar');
        enter.click();
    }
});
