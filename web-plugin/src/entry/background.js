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
  console.log('TAB-url: ', tab.url);
  // console.log('TAB ID: ', tabId);
  chrome.storage.local.set({ url: tab.url });

  // if (changeInfo.url) {
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

chrome.storage.local.set({ test: 1 });
