import axios from 'axios';

export class PostService {
  static async GetAll(limit = 10, page = 1) {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: limit,
        _page: page,
      }
    });
    return resp;
  }

  static async GetById(id = 1) {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return resp;
  }
}