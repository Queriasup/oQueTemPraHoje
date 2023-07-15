import styles from './CardDespensa.module.scss'
import {BsFillTrash3Fill} from 'react-icons/bs'
import CriarInputSpinner from '../../Inputs/InputSpinner'

export default function CriarCardDespensa(){
    
    return(
        <div className={styles.principal}>
            <div className={styles.imagem}>
                <img src="#" alt="Imagem-Ingrediente" />
            </div>
            <div className={styles.descricao}>
                <h2 className={styles.tituloCard}>Titulo</h2>
                <div className={styles.quantidade}>
                    <h3 className={styles.quantidadeTexto}>Quantidade</h3>
                    <div>
                        <CriarInputSpinner/>
                    </div>
                </div>
            </div>
            <div className='lixeira'>
                <BsFillTrash3Fill/>
            </div>      
        </div>
    )
}