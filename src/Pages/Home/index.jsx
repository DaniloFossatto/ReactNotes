import {Container, Brand, Menu, Search, Content, NewNote} from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'
import {FiPlus} from 'react-icons/fi'
import { Note } from '../../components/Note'


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
        <Section title="Minhas notas">
        <Note data={{title: 'react', tags: [
            {id: 1, name: 'react'},
            {id: 2, name: 'node'}
            ]
            }}/>
        </Section>
        </Content>

        <NewNote>
        <FiPlus/>
        Criar nota
        </NewNote>
        </Container>
    )
}