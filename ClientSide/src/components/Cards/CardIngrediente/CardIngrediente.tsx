import styles from './CardIngrediente.module.scss'

export default function CriarCardIngredientes(){
    
    return(
        <div className={styles.principal}>
            <div className={styles.imagem}>
                <img src="#" alt="imagem_ingrediente" />
            </div>
            <div>
                <h2 className={styles.texto}>Cu</h2>
            </div>
        </div>
    )}