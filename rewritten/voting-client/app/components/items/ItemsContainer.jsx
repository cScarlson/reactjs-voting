
import { connect } from 'react-redux';
//
import * as actionCreators from '../../action_creators';
import Item from './Items';

const ItemsContainer = connect(mapStateToProps, actionCreators)(Item);

function serialize(data) {
    var json = JSON.stringify(data);
    return json;
}

function parse(data) {
    var json = serialize(data), parsed = JSON.parse(json);
    return { items: parsed };
}

function mapStateToProps(state) {
    var items = state.get('items'), parsed = parse(items);
    console.log('#ItemsContainer', parsed);
    return parsed;
}

export default ItemsContainer;
