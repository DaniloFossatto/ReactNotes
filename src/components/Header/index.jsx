import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from "react-icons/ri";

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/daniloFossatto.png" alt="userFoto"/>
           <div>
                <span>Bem vindo</span>
                <strong>Danilo Fossatto</strong>
            </div>
            </Profile>
            <Logout>
                <RiShutDownLine/>
            </Logout>
            
        </Container>
    )
}