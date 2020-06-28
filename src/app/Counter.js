import React, {useState} from 'react';

const Counter = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    const increaseCount = (increment) => setCount(count + increment);
    const decreaseCount = (decrement) => setCount(count > decrement ? count - decrement : 0);

    return (
        <section>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>
                <button type="button" onClick={() => increaseCount(10)}>
                    +10
                </button>
                <button type="button" onClick={() => increaseCount(1)}>
                    +1
                </button>
            </div>
            <h2>{count}</h2>
            <div>
                <button type="button" onClick={() => decreaseCount(10)} disabled={count === 0}>
                    -10
                </button>
                <button type="button" onClick={() => decreaseCount(1)} disabled={count === 0}>
                    -1
                </button>
            </div>
        </section>
    );
};

export default Counter;
