
function setState(state) {
    return { type: 'SET_STATE', state };
}

function vote(entry) {
    return { type: 'VOTE', entry, meta: { remote: true } };
}

function next() {
    return { type: 'NEXT', meta: { remote: true } };
}

export { setState, vote, next };
