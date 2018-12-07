import Store from '../store/posts';
const initialState = Store;

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Replace all posts
     */
    case 'POSTS_REPLACE_ALL': {
      let posts = [];

      if (action.data && typeof action.data === 'object') {
        posts = action.data.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
          ingredients: item.ingredients,
          method: item.method,
        }));
      }

      return posts;
    }
    default:
      return state;
  }
}
