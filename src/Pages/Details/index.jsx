import {Container, Links, Content} from './styles'
import { Button } from '../../components/Button' 
import { ButtonText } from '../../components/ButtonText' 
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details(){
 
    return(
        <Container>
            <Header/>
            <main>
                <Content>
            <ButtonText title="Excluir nota"></ButtonText>

            <h1>
                Introdução ao React
            </h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ullam nam eius incidunt quidem fugiat. Similique repellat soluta, molestiae quia blanditiis nesciunt quod, illo placeat pariatur quo, sunt beatae sapiente.</p>

            <Section title="Links úteis">
                <Links>
                    <li>
                        <a href="#">https://www.rocketseat.com.br</a>
                    </li>
                    <li>
                        <a href="#">https://www.rocketseat.com.br</a>
                    </li>
                    
                </Links>
            </Section>

            <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="NodeJS"></Tag>
            </Section>

            <Button title="Voltar"></Button>
            </Content>
            </main>
        </Container>
    )
}