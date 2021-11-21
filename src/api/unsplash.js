import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID JqEXmy7HcB_dpJ0Ee8815krb0e6r-sb08KnJsCCvPXA',
      },
})