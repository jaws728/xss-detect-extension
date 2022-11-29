/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/entry/background.js ***!
  \*********************************/
// import axios from 'axios';
// import { registerMessageHandler } from 'axios-chrome-messaging-adapter';
// import fetchAdapter from '@vespaiach/axios-fetch-adapter';
// const baseURL = 'http://127.0.0.1:5000/api/model';
// register the adapter message hanlder
// registerMessageHandler()
// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:5000',
//   timeout: 1000,
//   adapter: fetchAdapter
// })
// registerMessageHandler({ adapter: fetchAdapter });
// function sendReq(q) {
//   return axios({
//     url: baseURL + '?q=' + q,
//     method: 'post',
//     adapter: fetchAdapter,
//   }); //axios.post(`${APIURL}/api/model`, {q})
// }
chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  // console.log('ChangeInfo: ', changeInfo);
  console.log('TAB-url: ', tab.url); // console.log('TAB ID: ', tabId);

  chrome.storage.local.set({
    url: tab.url
  }); // if (changeInfo.url) {
  //   try {
  //     let { data: res } = await sendReq(changeInfo.url);
  //     console.log(res);
  //     chrome.storage.local.set({ xss: res });
  //   } catch (err) {
  //     console.error('Error: ', err);
  //     chrome.storage.local.remove(xss);
  //   }
  // }
});
chrome.storage.local.set({
  test: 1
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxTQUFaLENBQXNCQyxXQUF0QixDQUFrQyxnQkFBZ0JDLEtBQWhCLEVBQXVCQyxVQUF2QixFQUFtQ0MsR0FBbkMsRUFBd0M7RUFDeEU7RUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsR0FBRyxDQUFDRyxHQUE3QixFQUZ3RSxDQUd4RTs7RUFDQVQsTUFBTSxDQUFDVSxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLEdBQXJCLENBQXlCO0lBQUVILEdBQUcsRUFBRUgsR0FBRyxDQUFDRztFQUFYLENBQXpCLEVBSndFLENBTXhFO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0QsQ0FoQkQ7QUFrQkFULE1BQU0sQ0FBQ1UsT0FBUCxDQUFlQyxLQUFmLENBQXFCQyxHQUFyQixDQUF5QjtFQUFFQyxJQUFJLEVBQUU7QUFBUixDQUF6QixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXBsdWdpbi8uL3NyYy9lbnRyeS9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgeyByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyIH0gZnJvbSAnYXhpb3MtY2hyb21lLW1lc3NhZ2luZy1hZGFwdGVyJztcbi8vIGltcG9ydCBmZXRjaEFkYXB0ZXIgZnJvbSAnQHZlc3BhaWFjaC9heGlvcy1mZXRjaC1hZGFwdGVyJztcblxuLy8gY29uc3QgYmFzZVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAvYXBpL21vZGVsJztcbi8vIHJlZ2lzdGVyIHRoZSBhZGFwdGVyIG1lc3NhZ2UgaGFubGRlclxuLy8gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigpXG4vLyBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4vLyAgIGJhc2VVUkw6ICdodHRwOi8vMTI3LjAuMC4xOjUwMDAnLFxuLy8gICB0aW1lb3V0OiAxMDAwLFxuLy8gICBhZGFwdGVyOiBmZXRjaEFkYXB0ZXJcbi8vIH0pXG4vLyByZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKHsgYWRhcHRlcjogZmV0Y2hBZGFwdGVyIH0pO1xuXG4vLyBmdW5jdGlvbiBzZW5kUmVxKHEpIHtcbi8vICAgcmV0dXJuIGF4aW9zKHtcbi8vICAgICB1cmw6IGJhc2VVUkwgKyAnP3E9JyArIHEsXG4vLyAgICAgbWV0aG9kOiAncG9zdCcsXG4vLyAgICAgYWRhcHRlcjogZmV0Y2hBZGFwdGVyLFxuLy8gICB9KTsgLy9heGlvcy5wb3N0KGAke0FQSVVSTH0vYXBpL21vZGVsYCwge3F9KVxuLy8gfVxuXG5jaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgZnVuY3Rpb24gKHRhYklkLCBjaGFuZ2VJbmZvLCB0YWIpIHtcbiAgLy8gY29uc29sZS5sb2coJ0NoYW5nZUluZm86ICcsIGNoYW5nZUluZm8pO1xuICBjb25zb2xlLmxvZygnVEFCLXVybDogJywgdGFiLnVybCk7XG4gIC8vIGNvbnNvbGUubG9nKCdUQUIgSUQ6ICcsIHRhYklkKTtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgdXJsOiB0YWIudXJsIH0pO1xuXG4gIC8vIGlmIChjaGFuZ2VJbmZvLnVybCkge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBsZXQgeyBkYXRhOiByZXMgfSA9IGF3YWl0IHNlbmRSZXEoY2hhbmdlSW5mby51cmwpO1xuICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgLy8gICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHhzczogcmVzIH0pO1xuICAvLyAgIH0gY2F0Y2ggKGVycikge1xuICAvLyAgICAgY29uc29sZS5lcnJvcignRXJyb3I6ICcsIGVycik7XG4gIC8vICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoeHNzKTtcbiAgLy8gICB9XG4gIC8vIH1cbn0pO1xuXG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyB0ZXN0OiAxIH0pO1xuIl0sIm5hbWVzIjpbImNocm9tZSIsInRhYnMiLCJvblVwZGF0ZWQiLCJhZGRMaXN0ZW5lciIsInRhYklkIiwiY2hhbmdlSW5mbyIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJzdG9yYWdlIiwibG9jYWwiLCJzZXQiLCJ0ZXN0Il0sInNvdXJjZVJvb3QiOiIifQ==