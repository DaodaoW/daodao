import { queryGetArticleDetails } from './services'
export default {

  namespace: 'home',

  state: {
    isDetails: false,
    details: {}
  },

  effects: {
    *queryShowDetails({ payload }, { call, put }) {
      const response = yield call(queryGetArticleDetails, payload);
      console.log(response);
      yield put({ type: 'setArticleDetails', payload: response });
    },
    *queryBack({_}, { put }) {
      yield put({ type: 'setIsDetails' });
    },
  },

  reducers: {
    setArticleDetails(state, action) {
      return { 
        ...state, 
        isDetails: true,
        details: action.payload[0].data[0]
      };
    },
    setIsDetails(state) {
      return { 
        ...state, 
        isDetails: false
      };
    }
  }
};