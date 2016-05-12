
import { List, Set, Map } from 'immutable';

function setState(state, newState) {
    return state.merge(newState);
}

function createItem(state, item) {
    var items = state.get('items', Set()), $item = Map(item);
    var $items = items.add($item);
    //console.log('@reducer#createItem', JSON.stringify(state), '|', items, '|', $item, item);
    console.log('@reducer#createItem', items, JSON.stringify($items));
    return state.merge({ items: $items });
}

function reducer(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'CREATE_ITEM':
            return createItem(state, action.item);
    }
    
    return state;
}

export default reducer;
