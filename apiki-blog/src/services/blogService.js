import axios from 'axios';

class BlogService {
  constructor() {
    const url = 'https://blog.apiki.com/wp-json/wp/v2';
    const timeout = 30000;

    this.http = axios.create({
      baseURL: url,
      timeout,
    });

    // Define os handlers para tratamento de erro e sucesso
    this.http.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    throw error;
  }

  /** Get all blogs */
  async getBlogsByPage(page) {
    return this.http.get(`/posts?_embed&categories=518&page=${page}`);
  }
}

export default new BlogService();
