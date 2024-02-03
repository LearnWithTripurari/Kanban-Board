import {environment} from "../environment/environment.js";

export async function login(email: string, password: string) {

    try {
        return await fetch(`${environment.API_URL}/auth/login`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify({email, password})
        });
    }
    catch (e) {
        console.error("Error: ", e);
    }


}