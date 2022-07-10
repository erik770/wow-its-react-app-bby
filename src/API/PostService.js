import axios from 'axios';

export class PostService {
    static async GetAll() {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return resp.data;
        } catch (e) {
            console.log(e);
        }
    }
}