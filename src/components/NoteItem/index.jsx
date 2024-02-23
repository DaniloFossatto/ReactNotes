
import { FiPlus, FiX  } from "react-icons/fi";

import {Container} from "./styles"


export function NoteItem({value, isNew = false, onClick, ...rest}){

    return(
        <Container $is_new={isNew}>
            <input 
            type='text'
            value={value}
            readOnly={!isNew}
            {...rest}
            />

            <button 
            type='button' 
            onClick={onClick}
            className={isNew ? 'buttonADD' : 'buttonDelete'}>
                {isNew ? <FiPlus/> : <FiX/>}
                </button>    
        </Container>
    )
}