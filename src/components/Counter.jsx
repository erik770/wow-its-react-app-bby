import { useState } from "react"

export const Counter = function () {
    const [count, setCount] = useState(0);  // раньше без хуков пришлось бы создавать класс, чтобы было состояние

    function inc() {
        setCount((prevCount) => prevCount + 1);
    };

    function dec() {
        setCount((prevCount) => (prevCount - 1));
    };

    return (
        <div>
            <h1>
                {count}
            </h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
