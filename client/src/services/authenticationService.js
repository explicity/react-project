import axios from 'axios';

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:3001/login';

  const { username, password } = request.user;
  const parameters = {
    username, password
  };

  return axios.post(LOGIN_API_ENDPOINT, parameters)
    .then((response) => {
      localStorage.setItem('currentUser', JSON.stringify(response.data))
      return response.data;
    })
}; 
