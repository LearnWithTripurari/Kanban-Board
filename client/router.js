export function onNavigation(_route) {
    const route = _route.toLowerCase();
    switch (route) {
        case 'home':
            routeHandler(route);
            break;
        case 'about':
            console.log(`<div>About Page</div>`)
            break;
        case 'contact':
            console.log(`<div>Contact Page</div>`)
            break;
    }
}

function routeHandler(route) {

    if(route == 'home') {
        const app = document.getElementById('App');
        app.append('This is the Home Page')
    }
    else if (route == 'about') {
        const app = document.getElementById('App');
        app.appendChild('This is the about page')
    }
    else if (route == 'contact') {
        const app = document.getElementById('App');
        app.appendChild('This is the contact App')
    }

}
