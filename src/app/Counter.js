import React, {useState} from 'react';

import {CountButton, CounterLayout} from '../components';

const Counter = () => {
    const [count, setCount] = useState(50);

    const changeCount = (amount) => {
        const newCount = count + amount;
        setCount(newCount > 0 ? newCount : 0);
    };

    return (
        <CounterLayout
            count={count}
            addTen={<CountButton changeCount={changeCount} amount={10} />}
            addOne={<CountButton changeCount={changeCount} amount={1} />}
            subtractTen={<CountButton changeCount={changeCount} amount={-10} disabled={count === 0} />}
            subtractOne={<CountButton changeCount={changeCount} amount={-1} disabled={count === 0} />}
        />
    );
};

export default Counter;
