import CriarHeader from "../../components/Header/Header";
import styles from "./BodyExibirReceita.module.scss"

export default function CriarBodyExibirReceita(){

    return(
        <div className={styles.pagina}>
            <CriarHeader/>
            <div className={styles.receita}>
                <div className={styles.top}>
                    <div className={styles.imagem}>
                        <img src="#" alt="imagem-receita" />
                    </div>
                    <div className={styles.textoReceita}>
                        <h2>Titulo Receita</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsam nostrum fugit iure temporibus. Repellendus accusantium praesentium, ratione et atque corrupti rem, recusandae enim aut expedita eveniet obcaecati maxime aliquam?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cum enim odio? Eaque eos, ipsum temporibus animi aspernatur modi reiciendis dolorum natus itaque facilis pariatur nisi dignissimos aliquam expedita culpa.
                        </p>
                    </div>
                </div>
                <div className={styles.bot}>
                    <div className={styles.ingredientes}>
                        <ul>
                            <li>arroba</li>
                            <li>arroba</li>
                            <li>arroba</li>
                            <li>arroba</li>
                            <li>arroba</li>
                            <li>arroba</li>
                        </ul>
                    </div>
                    <div className={styles.modoPreparo}>
                        <ul>
                            <li>preparo</li>
                            <li>preparo</li>
                            <li>preparo</li>
                            <li>preparo</li>
                            <li>preparo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}