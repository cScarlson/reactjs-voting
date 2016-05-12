
function setState(state) {
    return { type: 'SET_STATE', state };
}

function setItems(items) {
    return { type: 'SET_ITEMS', items };
}

function createItem(item) {
    return { type: 'CREATE_ITEM', item };
}

export { setState, setItems, createItem };
