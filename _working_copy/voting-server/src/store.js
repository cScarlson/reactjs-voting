
import { createStore } from 'redux';
import reducer from './reducer';

function makeStore() {
    return createStore(reducer);
}

export { makeStore };
export default makeStore;
