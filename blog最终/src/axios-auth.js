import axios from "axios";
const instance = axios.create({
    baseURL: 'https://blog-ad61e-default-rtdb.firebaseio.com'

})

// instance.defaults.headers.common['SOMETHING'] = 'SOMETHING'

export default instance