import { Redirect } from 'react-router-dom';

export function logout(history) {
    localStorage.removeItem("user");
    history.push("/login");
}

export function authenticatedRoute( component) {
    const isUserLogin = localStorage.getItem("user");
    if (!isUserLogin) {
        alert("You need to log in to access app routes");
        return <Redirect to={"/login"} />;
    } else {
        return component
    }
}