import { queryArticle, queryNewArticle, queryGetArticle  } from '../services/article';

export default {

  namespace: 'article',

  state: {
    info: {}
  },

  effects: {
    *queryArticle({ payload, callback }, { call, put }) {
      const response = yield call(queryArticle, payload);
      let info = response[0].data;
      callback(info);
      // yield put({ 
      //   type: 'setArticleInfo',
      //   payload: info
      // });
    },
    *queryNewArticle({ payload, callback }, { call, put }) {
      const response = yield call(queryNewArticle, payload);
      let res = response;
      callback(res);
    },
    *queryGetArticle({ payload }, { call, put }) {
      const response = yield call(queryGetArticle, payload);
      let info = response;
      yield put({ 
        type: 'getArticleInfo',
        payload: info
      });
    }
  },

  reducers: {
    getArticleInfo(state, action) {
      return { 
        ...state, 
        info: action.payload
      };
    },
  }
};