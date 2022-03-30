import React, { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.value); // in Typescripts, you use currentTarget instead of target in JS.
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
        console.log(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello, ", value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={value} type="text" placeholder="value" onChange={onChange} />
                <button>Log in</button>
            </form>
        </div>
    );
}

export default App;
