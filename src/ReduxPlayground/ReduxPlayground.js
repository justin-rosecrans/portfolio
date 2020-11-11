import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../store/actions';

function ReduxPlayground(props) {
    const counter = useSelector( state => state.count );
    const dispatch = useDispatch();

    return (
        <section className="container">
            <div>{counter}</div>
            <button onClick={ () => dispatch(Actions.increment()) }>+ ADD</button>
            <button onClick={ () => dispatch(Actions.decrement()) }>- MINUS</button>
        </section>
    )
}

export default ReduxPlayground;