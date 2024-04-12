import { useEffect, useState } from "react";
import createUser from "../../factory/createUser";

export default function CreateUser() {
    const uname = prompt("Name:") || "";
    const email = prompt("Email:") || "";
    const password = prompt("Password:") || "";
    const username = prompt("Username:") || "";


    const user = createUser(uname, email, password, username);
    
    const [state, setState] = useState<string>("Sem usuario");

    useEffect(() => {
        setState("Com usuario");
    }, [user])

    return (
        <h1>{state}</h1>
    )
}