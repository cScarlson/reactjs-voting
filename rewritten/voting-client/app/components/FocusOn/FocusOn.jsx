
import React from 'react';
//
import eventhub from '../../eventhub';

const FocusOn = React.createClass(new function FocusOn() {
    var thus = eventhub.installTo(this);
    
    function triggerHandler(e) {
        !!!this.props.children.focus;
    }
    
    function componentWillMount() {
        let channel = this.props.channel;
        this.on(channel, this.triggerHandler);
    }
    
    function componentWillUnmount(params) {
        let channel = this.props.channel;
        this.off(channel, this);
    }
    
    function render() {
        return this.props.children;
    }
    
    // export precepts
    this.triggerHandler = triggerHandler;
    this.componentWillMount = componentWillMount;
    this.render = render;
    this.componentWillUnmount = componentWillUnmount;
    
    return this;
});

export default FocusOn;
