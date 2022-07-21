import axios from 'axios';

export class PostService {
    static async GetAll() {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        return resp.data;
    }
}