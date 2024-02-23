import { Container, Form } from "./styles";

import {Header} from "../../components/Header"
import {Input} from "../../components/Input"
import {TextArea} from "../../components/TextArea"
import {NoteItem} from "../../components/NoteItem"
import {Section} from "../../components/Section"
import { Button } from '../../components/Button'
 
export function New(){
    
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título"></Input> 
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/DaniloFossatto"/>
                        <NoteItem isNew/>
                    </Section>

                    <Section title="Maracadores">
                        <div className="tags">
                        <NoteItem value="React"/>
                        <NoteItem isNew/> 
                        </div>
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
} 