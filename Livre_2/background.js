
// browser.runtime.onMessage.addListener(function(m,r,s) {
//         console.log(m);
//         msg=m;

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

var retaguarda=null;
var sprint=null;
i=0;
        // browser.storage.local.get('ecidade', function(f) {

        // }
(function d() {

                browser.storage.local.get('ecidade', function(f) {
                      browser.tabs.query({active: true, currentWindow: true},function(tabs) {
                                browser.tabs.sendMessage(tabs[0].id, {greeting: f['ecidade']}, function(response) {
                                //     console.log(response);
                                });
                        }) ;

        
                });
            })();

browser.storage.onChanged.addListener((changeInfo) => {
        browser.storage.local.get('ecidade', function(f) {
                console.log('Value is set to '+f['ecidade']);
                if(f['ecidade']=="retaguarda"){
                        i=0;
                         retaguarda=setInterval(() => {
                                 i++;
                                browser.tabs.query({active: true, currentWindow: true},function(tabs) {
                                        browser.tabs.sendMessage(tabs[0].id, f, function(response) {
                                        //     console.log(response);
                                        });
                                }); 
                         },500);
                clearInterval(sprint);
                }
                if(f['ecidade']=='sprint'){
                        i=0;
                         sprint=setInterval(() => {
                                 i++;
                                browser.tabs.query({active: true, currentWindow: true},function(tabs) {
                                        browser.tabs.sendMessage(tabs[0].id,f, function(response) {
                                        //     console.log(response);
                                        });
                                }); 
                        },500);
                clearInterval(retaguarda);
                }
        });
});