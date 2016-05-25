
import React from 'react';
//
import eventhub from '../../../../eventhub';

const Item = React.createClass(new function Item() {
    var thus = eventhub.installTo(this);
    
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
