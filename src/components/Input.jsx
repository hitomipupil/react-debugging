import PropTypes from "prop-types";
import { useState } from "react";

const Input = ({ clickHandler }) => {
    const [value, setValue] = useState("");

    const buttonHandler = () => {
        if (value.trim() === "") return;
        clickHandler(value);
        setValue("");
    };
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={buttonHandler}>Click me</button>
        </div>
    );
};

Input.propTypes = {
    clickHandler: PropTypes.func.isRequired
};

export default Input;
