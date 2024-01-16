import {h} from 'preact'
import "./Login.scss";
import {useRef} from "preact/hooks";
import {login} from "../../Services/AuthServices.js";
import {route} from "preact-router";

function Login() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    async function handleLogin(e) {
        e.preventDefault();
        const res = await login(emailRef.current.value, passwordRef.current.value)

        if(res.ok) {
            const data = await res.json();
            // document.cookie = `token=${data.accessToken}; path=/`;
            route('/#/dashboard/board', true);
        }
        else if(res.status === 401){
           alert("username or password is wrong. Please try again!")
        }
        else {
            alert("Something went wrong. Please try again!")
        }
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