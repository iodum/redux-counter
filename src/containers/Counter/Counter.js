import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/actions';

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
                <button onClick={() => this.props.onStroreResult(this.props.ctr)}>Store Result</button>
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
        ctr: state.counter.counter,
        storeResults: state.result.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (value) => dispatch(actionCreators.add(value)),
        onSubtractCounter: (value) => dispatch(actionCreators.subtract(value)),
        onStroreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
