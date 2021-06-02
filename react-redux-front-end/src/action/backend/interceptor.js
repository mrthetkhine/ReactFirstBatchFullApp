const axios = require('axios');

axios.interceptors.request.use(req => {
    console.log("Here in interceptor");
    console.log(`${req.method} ${req.url}`);
    // Important: request interceptors **must** return the request.
    return req;
});
export default axios;