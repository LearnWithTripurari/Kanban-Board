import {environment} from "../environment/environment.js";

export function login(email, password) {

    fetch(`${environment.API_URL}/auth/login`,{
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST', body: JSON.stringify({email, password})
    })
        .then(res => res.json())
        .then(data => console.log)
        .catch(error => console.error)
}