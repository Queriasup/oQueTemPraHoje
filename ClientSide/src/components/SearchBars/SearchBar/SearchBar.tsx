import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import {BsSearch} from 'react-icons/bs'

export default function CriarSearchBar(){

    return(
        <div>
            <InputGroup size='md'>
            <Input variant = 'filled' placeholder='Busque um ingrediente' />
            <InputLeftElement pointerEvents='none'>
                <BsSearch/>
            </InputLeftElement>
            </InputGroup>
        </div>
    )
}