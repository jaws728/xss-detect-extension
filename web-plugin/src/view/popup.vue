<template>
  <div class="main_app">
    <button @click="init">Check XSS</button>
    <div>{{resData}}</div>
    <!-- <div v-if="isXss">There is a XSS attack!</div>
    <div v-else>This site is safe.</div> -->
  </div>
</template>

<script>
import {requestMixin} from "@/mixins"
export default {
  name: 'popupView',
  mixins: [requestMixin],
  data () {
    return {
      // isXss: false,
      // resData: 'initial setups...'
    }
  },
  methods: {
    init(){
      // alert('clicked')
      chrome.storage.local.get(['xss'], function(res){
        this.resData = res
        alert(res.xss)
      })
    },
    // getXSS() {
    //   // const data = api('/api', {url: window.location.pathname})
    //   const response = this.getXssRequest('asn')
    //   this.resData = response.data
    //   // this.isXss = data != 0 ? true : false
    // }
  },
  created(){
    this.init()
  }
}

</script>

<style>
.main_app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  width: 200px;
}
.main_app div {
  font-size: large;
}
.main_app button {
  margin-bottom: 20px;
}
</style>
