
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
//
import eventhub from '../../eventhub';
import Item from './components/item/Item';

const Items = React.createClass(new function Items() {
    var thus = eventhub.installTo(this);
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
        this.setState({ name: '' });
        this.fire('test', 'datum');
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        this.createItem();
    }
    
    function componentWillMount() {
        (arguments, this.props, this.state, this);
        this.fire('trigger:focus', this);
    }
    
    function componentWillUnmount() {
        this.off('test', this);
    }
    
    function render() {
        let items = this.props.items.map(item => (<Item key={item.name} { ...item } />));
        
        return (
            <form onSubmit={handleSubmit.bind(this)}>
                {items}
                <input type="text" onChange={this.updateName} value={this.state.name} placeholder="Unnamed" />
                <button>Create</button>
            </form>
        );
    }
    
    // export precepts
    this.mixins = mixins;
    this.getInitialState = getInitialState;
    this.updateName = updateName;
    this.createItem = createItem;
    this.handleSubmit = handleSubmit;
    this.componentWillMount = componentWillMount;
    this.render = render;
    this.componentWillUnmount = componentWillUnmount;
    
    return this;
});

export default Items;
