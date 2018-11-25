import axios from 'axios';

export function getCodedKGrams(note: string) {
  return axios.post('http://localhost:5000', {
    note
  })

  // return {
  //   then: (callback: Function) => {
  //     callback([

  //     ])
  //   }
  // }
}
