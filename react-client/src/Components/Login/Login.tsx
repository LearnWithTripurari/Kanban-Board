import "./Login.scss";
import { FormEvent, useRef } from "react";
import { login } from "../../Services/AuthServices.ts";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        if (emailRef.current && passwordRef.current) {
            const res = await login(emailRef.current.value, passwordRef.current.value);

            if (res?.ok) {
                const data = await res.json();
                document.cookie = `token=${data.accessToken}; path=/`;
                console.log(data);
                navigate('/dashboard/board');
            } else if (res?.status === 401) {
                alert('Username or password is wrong. Please try again!');
            } else {
                alert('Something went wrong. Please try again!');
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Kanban Board</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" ref={emailRef} required />
                    <input type="password" placeholder="Password" ref={passwordRef} required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Login;