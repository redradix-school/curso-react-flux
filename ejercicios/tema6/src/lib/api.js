import request from 'superagent';

const API = {
  getJSON(url){
    return new Promise((resolve, reject) => {
      //superagent returns JSON by default, no JSON.parse needed
      request
        .get(url)
        .end((err, response) => {
          return err ? reject(err) : resolve(response.body)
        });
    });
  },

  getCategories(){
    return this.getJSON('/api/categories.json');
  },

  getProducts(categoryId){
    return this.getJSON('/api/products/' + categoryId + '.json');
  }
};

export default API;
