
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';
//
import * as actionCreators from '../action_creators';
import Winner from './Winner';

const Results = React.createClass({
    mixins: [PureRenderMixin],
    getPair: function getPair() {
        return this.props.pair || [];
    },
    getVotes: function getVotes(entry) {
        if (this.props.tally && this.props.tally.has(entry)) return this.props.tally.get(entry);
        return 0;
    },
    render: function render() {
        return this.props.winner ?
            <Winner ref="winner" winner={this.props.winner} />:
            <div className="results">
                <div className="tally">
                    {this.getPair().map(entry => 
                        <div className="entry" key={entry}>
                            <h1>{entry}</h1>
                            <div className="voteCount">
                                {this.getVotes(entry)}
                            </div>
                        </div>
                    )}
                </div>
                <div className="management">
                    <button className="next" ref="next" onClick={this.props.next}>Next</button>
                </div>
            </div>;
    }
});

function mapStateToProps(state) {
    return {
        pair: state.getIn(['vote', 'pair']),
        tally: state.getIn(['vote', 'tally']),
        winner: state.get('winner')
    };
}

const ResultsContainer = connect(mapStateToProps, actionCreators)(Results);

export { Results, ResultsContainer };
export default Results;
