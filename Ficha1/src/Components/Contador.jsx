import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    return (
        <div className="container mt-5">
            <h1 className="text-center">{count}</h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary mx-2" onClick={increment}>+</button>
                <button className="btn btn-danger mx-2" onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default Counter;

