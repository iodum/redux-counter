import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add" clicked={() => this.props.onAddCounter(7)}  />
                <CounterControl label="Subtract" clicked={() => this.props.onSubtractCounter(4)}  />
                <hr />
                <button onClick={this.props.onStroreResult}>Store Result</button>
                <ul>
                    { this.props.storeResults.map( (result, i) => (
                        <li
                            key={result.id}
                            onClick={()=>this.props.onDeleteResult(result.id)}>{result.value}</li>
                    )) }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storeResults: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: (value) => dispatch({type: actionTypes.ADD, value: value}),
        onSubtractCounter: (value) => dispatch({type: actionTypes.SUBTRACT, value: value}),
        onStroreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, id: id}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
