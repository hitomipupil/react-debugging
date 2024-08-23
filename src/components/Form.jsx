import PropTypes from "prop-types";
import { useState } from "react";

const Form = ({ handleText }) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return;
        }
        handleText(value);
        setValue("");
    };

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <input
                type="text"
                placeholder="Type something..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};

Form.propTypes = {
    handleText: PropTypes.func.isRequired
};

export default Form;
