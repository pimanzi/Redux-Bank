import { thunk } from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducerAccount from './features/account/accountSlice';
import reducerCustomer from './features/customers/customers.slice';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  account: reducerAccount,
  customer: reducerCustomer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
