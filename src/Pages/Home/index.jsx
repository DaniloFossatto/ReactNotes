import {Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import {FiPlus} from 'react-icons/fi'

export function Home(){
    
    return (
        <Container>
            <Brand>
            <h1>ReactNotes</h1>
            </Brand>

        <Header/>

        <Menu>
        <li><ButtonText title="Todos" $is_active/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="NodeJs"/></li>
        </Menu>

        <Search>
        <Input placeholder="Pesquisar pelo titulo"/>
        </Search>

        <Content>

        </Content>

        <NewNote>
        <FiPlus/>
        Criar nota
        </NewNote>
        </Container>
    )
}