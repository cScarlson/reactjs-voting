
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
//
import Item from './components/item/Item';

const Items = React.createClass(new function Items() {
    var thus = this;
    var mixins = [PureRenderMixin];
    
    function getInitialState() {
        return {
            name: ''
        };
    }
    
    function updateName(e) {
        var name = e.target.value;
        console.log(name);
        this.setState({ name: name });
    }
    
    function createItem() {
        let name = this.state.name;
        let templateItem = { name: name, desc: 'No description yet' };
        if (!!name) this.props.createItem(templateItem);
    }
    
    function render() {
        let items = this.props.items.map(item => (<Item key={item.name} { ...item } />));
        let has = !!items.length
        
        return (
            <div>
                {items}
                <input type="text" onChange={this.updateName} value={this.state.name} placeholder="Unnamed" />
                <button onClick={() => this.createItem()}>Create</button>
            </div>
        );
    }
    
    // export precepts
    this.mixins = mixins;
    this.getInitialState = getInitialState;
    this.updateName = updateName;
    this.createItem = createItem;
    this.render = render;
    
    return this;
});

export default Items;
