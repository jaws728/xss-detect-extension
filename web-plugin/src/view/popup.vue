<template>
  <div class="main_app">
    <button @click.prevent="init">Check XSS</button>
    <div class="result">Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'popupView',
  data() {
    return {
      resData: 'loading...',
      url: '',
      baseURL: 'http://127.0.0.1:5000/api/model',
    };
  },
  methods: {
    async init() {
      chrome.storage.local.get(['url'], async function (store) {
        try {
          const { data: res } = await axios.post('http://127.0.0.1:5000/api/model?q=' + store.url);
          this.resData = res;
          console.log('Get XSS result: ', this.resData);
          alert(this.resData);
        } catch (e) {
          console.log('Error: ', e);
        }
      });
    },
  },
  created() {
    this.init();
  },
};
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
  cursor: pointer;
  width: 100px;
  height: 40px;
  margin-bottom: 40px;
  background-color: lightblue;
  border-radius: 5px;
  border: 2px solid lightskyblue;
}
.result {
  height: 60px;
}
</style>
