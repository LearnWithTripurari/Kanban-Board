import App from "../App";
import Home from "../Home";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs"
import Landing from "../landing";

const router = {
    routes: {
        '/': App,
        '#/home': Home,
        '#/aboutUs': AboutUs,
        '#/contactUs': ContactUs,
        '#dashboard': Landing
    },
    onNavigate: function (route) {
        window.addEventListener("popstate", () => {
            this.routerHandler(document.location.pathname);
        });
       this.routerHandler(route);
    },
    routerHandler: function (route) {
        const root = document.getElementById("root");
        root.innerHTML = '';
        const Component = this.routes[route];
        window.history.pushState({}, route, window.location.origin + route)
        root.appendChild(new Component());
    }
}

export default router;
