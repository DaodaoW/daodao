import dva from 'dva';
import './index.css';
import axios from 'axios';
import { createBrowserHistory as createHistory } from "history";

// 1. Initialize
const app = dva({
  history: createHistory()
});

  window.url = 'http://47.103.24.35:3000';
  window.$axios = axios;
  // 2. Plugins
  // app.use({});

  // 3. Model
  app.model(require('./models/article').default);
  app.model(require('./routes/Home/models').default);
  // 4. Router
  app.router(require('./router').default);

  // 5. Start
  app.start('#root');

