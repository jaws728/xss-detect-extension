// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");
let xssText = document.getElementById('xss');

let url = window.location.href
let test = require('test.js')
window.addEventListener("beforeunload", function (event) {
  const Xtest = [
    [1, 1],
    [2, 5],
    [2, 7],
    [3, 2],
    [4, 6]
    ]
  pred = test(Xtest)
  alert(pred);
})




// function makeRequest() {
//   httpRequest = new XMLHttpRequest();

//   if (!httpRequest) {
//     alert('Giving up :( Cannot create an XMLHTTP instance');
//     return false;
//   }
//   httpRequest.onreadystatechange = alertContents;
//   httpRequest.open('POST', '127.0.0.1:5000', true);
//   httpRequest.send(`url=${url}`);
// }

// function alertContents() {
//   if (httpRequest.readyState === XMLHttpRequest.DONE) {
//     if (httpRequest.status === 200) {
//       alert(httpRequest.responseText);
//       console.log(httpRequest.responseText);
//     } else {
//       alert('There was a problem with the request.');
//     }
//   }
// }

// window.addEventListener("beforeunload", function (event) {
//   makeRequest()
//   alertContents()
// });




// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setPageBackgroundColor,
//   });
// });

// // The body of this function will be executed as a content script inside the
// // current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
