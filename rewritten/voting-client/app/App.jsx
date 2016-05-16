
import React from 'react';
import { default as ReactDOM, render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import { List, Set, Map } from 'immutable';
//
import { setState } from './action_creators';
import eventhub from './eventhub';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';
import ItemsContainer from './components/items/ItemsContainer';
import Item from './components/items/components/item/Item';

const Application = React.createClass(new function Application() {
    var thus = eventhub.installTo(this);
    
    function componentDidMount() {
        this.on('trigger:focus', function app(e, data) {
            console.log('@App#componentDidMount#trigger:focus#data', data);
        });
    }
    
    function componentWillUnmount() {
        this.off('trigger:focus', this);
    }
    
    function render () {
        
        return (
            <div>
                <h1>Welcome!</h1>
                <Link to={'/'}>Home</Link> | <Link to={'/items'}>Items</Link>
                <br />
                <br />
                {this.props.children}
            </div>
        );
    }
    
    // export precepts
    this.componentDidMount = componentDidMount;
    this.render = render;
    this.componentWillUnmount = componentWillUnmount;
    
    return this;
});

let socket = {
    emit: (channel, data) => console.log('#emit', channel, data)
};
const storeEnhancer = applyMiddleware(remoteActionMiddleware(socket));
const store = createStore(reducer, storeEnhancer);

const routes = (<Route path="/" component={Application}>
    <Route path="/items" component={ItemsContainer}></Route>
    <Route path="/items/:id" component={Item}></Route>
</Route>);

const router = (<Router history={hashHistory}>{routes}</Router>);
const stateProvider = (<Provider store={store}>{router}</Provider>);
const anchor = document.getElementById('app');

var stateHandler = state => {
    store.dispatch(setState(state));
};

const schema = Map({ items: Set([]) });
let action = setState(schema);
store.dispatch(action);

//console.clear();
ReactDOM.render(stateProvider, anchor);

export default Application;
