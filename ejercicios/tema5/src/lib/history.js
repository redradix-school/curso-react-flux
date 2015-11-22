// history.js
//hash navigation
import createBrowserHistory from 'history/lib/createHashHistory';
//HTML5 api
import { createHistory } from 'history';
export default createHistory({
  queryKey: false
});