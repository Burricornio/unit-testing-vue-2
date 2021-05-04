import axios from 'axios'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getMessage() {
  return axios.get('http://localhost:3000/message').then((response) => {
    return response.data
  })
}
