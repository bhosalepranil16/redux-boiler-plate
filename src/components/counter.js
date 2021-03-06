import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement, asyncIncrement, asyncDecrement } from '../store/actions/countAction';

const Counter = (props) => {
    return(
        <div className="container text-center">
            <h1>Counter</h1>
            <h1>{props.count}</h1>
            <button className="btn btn-outline-success d-block mx-auto mb-3" onClick={() => { props.incrementCount() }}>Increment</button>
            <button className="btn btn-outline-danger d-block mx-auto" onClick={() => { props.decrementCount() }}>Decrement</button>
            <button className="btn btn-outline-warning d-block mx-auto mb-3" onClick={() => { props.asyncIncrementCount() }}>Async Increment</button>
            <button className="btn btn-outline-info d-block mx-auto" onClick={() => { props.asyncDecrementCount() }}>Async Decrement</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        count : state.count
    };
}

const mapActionToProps = dispatch => {
    return {
        incrementCount : () => {dispatch(increment())},
        decrementCount : () => {dispatch(decrement())},
        asyncIncrementCount : () => {dispatch(asyncIncrement())},
        asyncDecrementCount : () => {dispatch(asyncDecrement())}
    };
}

export default connect(mapStateToProps,mapActionToProps)(Counter);