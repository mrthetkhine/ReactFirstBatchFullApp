const axios = require('axios');

axios.interceptors.request.use(req => {
    console.log("Here in interceptor");
    console.log(`${req.method} ${req.url}`);
    let userStr = localStorage.getItem("user");
    let user = JSON.parse(userStr);
    console.log("User str ",user);
    req.headers.authorization = 'Bearer '+ user.token;
    // Important: request interceptors **must** return the request.
    return req;
});
export default axios;