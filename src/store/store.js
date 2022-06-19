import {
    legacy_createStore,
    combineReducers,
    applyMiddleware ,
    compose
  } from "redux";

  import {authreducer} from "./authReducer";
  import thunk from 'redux-thunk';


  const rootReducer = combineReducers({
    auth :authreducer
  });

  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

  export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    );
