import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from '../store/reducers/userReducer';
import '../styles/globals.css'
const store =createStore(userReducer,applyMiddleware(thunk));
function MyApp({ Component, pageProps }) {
  
  return <Provider store={store}>

    <Component {...pageProps} />
  </Provider>
}

export default MyApp
