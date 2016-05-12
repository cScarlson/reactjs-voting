
import React from 'react';

const Item = React.createClass(new function Item() {
    
    function render() {
        let item = this.props.item;
        
        return (
            <div>
                <b>{this.props.name}</b>
                <br />
                <i>{this.props.desc}</i>
                <br />
                <br />
            </div>
        );
    }
    
    // export precepts
    this.render = render;
    
    return this;
});

export default Item;
