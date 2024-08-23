import { useState, useEffect } from "react";

import getUser from "../apis/getUser";

const User = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getUser(1);
                setUser(user);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            )}
            {error && <div>{error}</div>}
        </div>
    );
};

export default User;
