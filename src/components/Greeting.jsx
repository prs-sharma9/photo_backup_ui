import { useAuth } from "../context/AuthContext";

function Greeting() {
    const { user } = useAuth();
    return (
        <div>
            <p>Hello {user.username}</p>
        </div>
    );
}

export default Greeting;