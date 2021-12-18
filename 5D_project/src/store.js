// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// // import AsyncStorage from '@react-native-community/async-storage';
// import rootReducer from './reducers/AppReduser'

// const persistConfig = {
//   key: 'root',
//   storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

import { createStore, combineReducers, applyMiddleware } from 'redux';
import projectReducer from './reducers/AppReduser';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    timeout: null,
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    keyPrefix: '',
    stateReconciler: autoMergeLevel2,

};

const rootReducer = combineReducers({
    SandhiStore: projectReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
