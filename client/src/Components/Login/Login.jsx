import {h} from 'preact'
import "./Login.scss";
import {useRef} from "preact/hooks";
import {login} from "../../Services/AuthServices.js";

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    function handleLogin(e) {
        e.preventDefault();

        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)

        login(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Kanban Board</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" ref={emailRef} required/>
                    <input type="password" placeholder="Password" ref={passwordRef} required/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login;