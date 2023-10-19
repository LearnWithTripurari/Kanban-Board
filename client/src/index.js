import App from "./App";
import router from "./libs/router";

const root = document.getElementById('root');
root.appendChild(new App());

window.onload = function() {
   router.onNavigate(document.location.hash || '/')
}


