import React, {useState} from 'react';

import {CountButton} from '../components';

const Counter = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    const changeCount = (amount) => {
        const newCount = count + amount;
        setCount(newCount > 0 ? newCount : 0);
    };

    return (
        <section>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                <CountButton changeCount={changeCount} amount={10} />
                <CountButton changeCount={changeCount} amount={1} />
            </div>
            <h2>{count}</h2>
            <div>
                <CountButton changeCount={changeCount} disabled={count === 0} amount={-10} />
                <CountButton changeCount={changeCount} disabled={count === 0} amount={-1} />
            </div>
        </section>
    );
};

export default Counter;
