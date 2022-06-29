import axios from "axios";

const APIURL = "http://127.0.0.1:5000"

export const requestMixin = {  
  methods: {  
    async getXssRequest(q) {  
      return await axios.post(`${APIURL}/api/model`, {q})
    }
  }
}