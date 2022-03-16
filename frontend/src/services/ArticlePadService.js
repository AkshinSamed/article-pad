import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
class ArticlePadService{

    getUserByEmailAndPassword(email, password){
        return axios.get(USER_API_BASE_URL + '/' + email + '/' + password);
    }
}

export default new ArticlePadService();