import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../../actions';

const App = () => {

    const { count } = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const { increase, decrease } = counterActions;

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increase())}>increase</button>
            <button onClick={() => dispatch(decrease())}>decrease</button>
        </div>
    );
};

export default App;