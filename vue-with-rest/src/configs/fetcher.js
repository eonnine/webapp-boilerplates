import axios from 'axios';
import packageJson from '../../package.json';

const { endPoints } = packageJson;

axios.defaults.baseURL = endPoints.sample;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

class Fetcher {
  static async get(url) {
    return axios.get(url).then(res => res);
  }

  static post(url, params = {}) {
    return axios.post(url, params).then(res => res);
  }

  static put(url, params = {}) {
    return axios.put(url, params).then(res => res);
  }

  static delete(url) {
    return axios.delete(url).then(res => res);
  }

  static all(list) {
    return axios.all(list).then(res => res);
  }
}

export default Fetcher;
