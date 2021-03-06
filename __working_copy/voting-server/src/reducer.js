import { INITIAL_STATE, setEntries, next, vote } from './core';

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            return state.update('vote', voteState => vote(voteState, action.entry));
    }
    
    return state;
}

export { reducer };
export default reducer;
