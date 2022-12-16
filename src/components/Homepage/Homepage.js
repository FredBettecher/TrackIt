import { Link } from "react-router-dom";
import { HomepageStyle } from "./HomepageStyle";
import axios from "axios";
import { useState } from "react";

export default function Homepage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(){
        const postLogin = {
            email: email,
            password: password
        }

        return axios.post 
    }

    return(
        <HomepageStyle>
            <img src="./images/trackit.png" alt="TrackIt"/>
            <form>
                <input type="email" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro" onClick={login}> Não tem uma conta? Cadastre-se!</Link>
        </HomepageStyle>
    );
}