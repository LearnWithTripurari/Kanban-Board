import router from "./libs/router";

export default function App() {
    return (
        <div>
            <button onClick={ () => router.onNavigate('/home') }>Home</button>
            <button onClick={ () => router.onNavigate('/aboutUs')}>About Us</button>
            <button onClick={ () => router.onNavigate('/contactUs') }>Contact Us</button>
        </div>
    )
}
