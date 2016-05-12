
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var Vote = React.createClass({
    mixin: [PureRenderMixin],
    getPair: function getPair() {
        return this.props.pair || [];
    },
    isDisabled: function isDisabled() {
        return !!this.props.hasVoted;
    },
    hasVotedFor: function hasVotedFor(entry) {
        return this.props.hasVoted === entry;
    },
    render: function render() {
        
        return <div className="voting">
            {this.getPair().map(entry => 
                <button key={entry} disabled={this.isDisabled()} onClick={() => this.props.vote(entry)}>
                    <h1>{entry}</h1>
                    {this.hasVotedFor(entry) ? <div className="label">Voted</div> : null}
                </button>
            )}
        </div>;
    }
});

export default Vote;
