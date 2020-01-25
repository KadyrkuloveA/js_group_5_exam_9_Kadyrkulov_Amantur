import axios from 'axios';

const axiosContacts= axios.create({
    baseURL: 'https://contacts-ex9.firebaseio.com/'
});

axiosContacts.interceptors.request.use(req => {
    return req;
});

axiosContacts.interceptors.response.use(res => {
    return res;
}, err => {
    throw err;
});

export default axiosContacts;