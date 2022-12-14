'use strict'

import { inject } from 'vue'
import axios from 'axios'

const injectionKey = Symbol('http')

export const useHttp = () => inject(injectionKey)

export function createAxios () {
  const _axios = {
    async install (app, options) {
      const http = axios.create(...options)
      app.provide(injectionKey, http)

      app.config.globalProperties.$http = http
    }
  }
  return _axios
}

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// const config = {
//   // baseURL: process.env.baseURL || process.env.apiUrl || ""
//   // timeout: 60 * 1000, // Timeout
//   // withCredentials: true, // Check cross-site Access-Control
// }

// const _axios = axios.create(config)

// _axios.interceptors.request.use(
//   function (config) {
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// _axios.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )
