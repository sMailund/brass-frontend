import axios from 'axios';

const baseUrl = 'https://backend-dot-brass-273814.ew.r.appspot.com'

export const getTasks = () => axios.get(`${baseUrl}/task`);

export const submitTask = (taskNum, answer) => {
    const formData = new FormData();
    formData.set("answer", answer);

    return axios({
        method: 'patch',
        url: `${baseUrl}/task/${taskNum}`,
        data: formData,
        headers: {'Content-Type': 'multipart/form-data' }
    })
}

