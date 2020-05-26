import axios from 'axios'

export default function request(config) {
  const instance = new axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  // instance.interceptors.request.use(config => {
  //   console.log('拦截成功');
  //   return config
  // },error => {
  //   console.log('拦截失败');
  //   return error
  // })


  return instance(config)
}