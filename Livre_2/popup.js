const retaguarda=document.getElementById('retaguarda');
const sprint=document.getElementById('sprint');
window.onload=function() {

    browser.storage.local.get('ecidade', function(f) {
        if(f['ecidade']=="retaguarda"){
            retaguarda.checked=true
            sprint.checked=false;
        }
        if(f['ecidade']=='sprint'){
                sprint.checked=true;
            retaguarda.checked=false;
        }
    });
}
// alert('s');
// var port = chrome.extension.connect({
//     name: "Sample Communication"
// });
// var port = browser.tabs.connect(
//     tabs[0].id,
//     {name: "tabs-connect-example"}
//   );

//browser.runtime.



// browser.tabs.query({active: true, currentWindow: true},function(tabs) {
//     browser.cookies.set({
//         url: tabs[0].url,
//         name: "ecidade", 
//         value: JSON.stringify(cookieVal)
//       });
// });
// window.onload=function() {
//     cookieVal={ecidade:'retaguarda'};
//     browser.storage.local.set(cookieVal, function() {
//         console.log('Value is set to ' + cookieVal);
//     });
      
// }

retaguarda.addEventListener('change',function() {
    cookieVal={ecidade:'retaguarda'};  
    browser.storage.local.set(cookieVal, function() {
        // console.log('Value is set to ' + cookieVal);
    });
    browser.storage.local.get('ecidade', function(f) {
        // console.log('Value is set to '+f['ecidade']);
    });
    if(retaguarda.checked==true){
        sprint.checked=false;
    }
});

sprint.addEventListener('change',function() {
    cookieVal={ecidade:'sprint'};  
    browser.storage.local.set(cookieVal, function() {
        // console.log('Value is set to ' + cookieVal);
    });
    browser.storage.local.get('ecidade', function(f) {
        // console.log('Value is set to '+f['ecidade']);
    });
    if(sprint.checked==true){
        retaguarda.checked=false;
    }
});




// let port = browser.extension.connect({name: "Sample Communication"});
// port.postMessage("sprint");
//     browser.runtime.sendMessage("sprint",function() {
// //        alert("foi");
//     });

/*
//envia 
port.postMessage("Hi BackGround");

//recebe
port.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
});
*/