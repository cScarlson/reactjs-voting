
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var Winner = React.createClass({
    mixins: [PureRenderMixin],
    render: function render() {
        return <div className="winner">
            Winner is {this.props.winner}!
        </div>;
    }
});

export default Winner;
