import Store from '../store/posts';
const initialState = Store;

interface ISinglePostFromAPIResponse {
  readonly author: string;
  readonly body: string;
  readonly id: number;
  readonly image: string;
  readonly title: string;
}

interface IAction {
  readonly type: string;
  readonly data: ISinglePostFromAPIResponse[];
}

export default (state = initialState, action: IAction) => {
  const { type, data } = action;

  switch (type) {
    /**
     * Replace all posts
     */
    case 'POSTS_REPLACE_ALL': {
      let posts: ISinglePostFromAPIResponse[] = [];

      if (data && typeof data === 'object') {
        posts = data.map((item) => ({
          author: item.author || '',
          body: item.body || '',
          id: item.id || 0,
          image: item.image || '',
          title: item.title || '',
        }));
      }

      return posts;
    }
    default:
      return state;
  }
};
