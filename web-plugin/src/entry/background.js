import axios from "axios"
import { registerMessageHandler } from 'axios-chrome-messaging-adapter'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'

const APIURL = "http://127.0.0.1:5000"
// register the adapter message hanlder
// registerMessageHandler()
// const instance = axios.create({
//   baseURL: 'http://127.0.0.1:5000',
//   timeout: 1000,
//   adapter: fetchAdapter
// })
registerMessageHandler({ adapter: fetchAdapter })

function sendReq(q) {
  return axios({
    url: APIURL + '/api/model?q=' + q,
    method: 'post',
    // data: {q: q},
    adapter: fetchAdapter
  }) //axios.post(`${APIURL}/api/model`, {q})
}

chrome.tabs.onUpdated.addListener(async function
  (tabId, changeInfo, tab) {
    if (changeInfo.url) {
      try{
        let {data: res} = await sendReq(changeInfo.url)
        console.log(res);
        chrome.storage.local.set({xss: res})
      } catch(err) {
        console.error(err.response.data)
      }
    }
  }
);