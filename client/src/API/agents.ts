import axios, { AxiosResponse } from 'axios'
import { ISound } from '../app/models/models'
// import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:3033/api'

//  axios.interceptors.request.use(config => {
//   config.headers.post['header1'] = 'value';

//   return config;
// // });

// axios.interceptors.response.use(undefined, (error) => {
//   if (error.message === "Network Error" && !error.response) {
//     // toast.error("Network error - make sure API is running!");
//     console.log(error);

//   }
//   const { status, data, config, headers } = error.response;
//   if (status === 404) {
//     console.log(error);
//   }
//   if (
//     status === 400 &&
//     config.method === "get" &&
//     data.errors.hasOwnProperty("id")
//   ) {

//   }
//   if (status === 500) {
//   }
//   throw error.response;
// });

const responseBody = (response: AxiosResponse) => response.data

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
}

// all the methods to support the user functionality
const sound = {
  find: (soundId: string) => request.get(`/sounds/:${soundId}`),
  getAll: (): Promise<ISound[]> => request.get('/sounds/'),
  submitSounds: (data: ISound[]) => request.post('/sounds/submit-sounds', data),
  play: (soundId: string) => request.put(`/sounds/:${soundId}/play`, {}),
}

export default {
  sound,
}
