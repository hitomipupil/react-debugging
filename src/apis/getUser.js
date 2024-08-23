import axios from "axios";

const getUser = async (id) => {
    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (res.status !== 200) {
            throw new Error(`HTTP status code: ${res.status}`);
        }
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export default getUser;
