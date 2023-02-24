import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        console.log("Submit");
        setTimeout(() => {
            setLoading(false);
            history.push('/app/dashboard');
        }, 1500);
    }
    return(
        <main style={{textAlign:'center'}}>
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
            {!loading && <button type="submit">Sign in</button>}
            {loading && <p>Loading...</p>}
        </form>
        </main>
    )
}

export default Login;