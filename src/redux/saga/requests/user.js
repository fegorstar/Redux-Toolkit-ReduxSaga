import axios from 'axios';
//function that perform the request
export function requestGetUser() {
return axios.request({
method: 'get',
url: "https://my-json-server.typicode.com/fegorstar/demo/user"
});
}