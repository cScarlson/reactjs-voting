
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
//
import * as actionCreators from '../action_creators';
import Winner from './Winner';
import Vote from './Vote';

const Voting = React.createClass({
    mixins: [PureRenderMixin],
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
        return <div>
            {this.props.winner ? <Winner ref="winner" winner={this.props.winner} /> : <Vote { ...this.props } />}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        hasVoted: state.get('hasVoted'),
        winner: state.get('winner')
    };
}

const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);

export { Voting, VotingContainer };
export default Voting;
