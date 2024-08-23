import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Input from "./components/Input";
import User from "./components/User";

const App = () => {
    const [text, setText] = useState("");

    const handleText = (value) => {
        setText(value);
    };

    const clickHandler = (value) => {
        console.log(value);
    };

    return (
        <>
            <Header title="React debugging" />
            <h2>{text}</h2>
            <Form handleText={handleText} />
            <h1 className="title">Hello</h1>
            <Input clickHandler={clickHandler} />
            <User />
        </>
    );
};

export default App;
