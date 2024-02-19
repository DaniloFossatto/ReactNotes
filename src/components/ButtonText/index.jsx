import { Container } from "./styled";

export function ButtonText({title, isActive = false, ...rest}){
    return(
        <Container type="button" $is_active={isActive} {...rest}>
            {title}
        </Container>
    )
}