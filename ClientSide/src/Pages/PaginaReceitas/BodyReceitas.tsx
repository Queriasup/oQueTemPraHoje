import CriarHeader from "../../components/Header/Header";
import CriarSearchBar from "../../components/SearchBars/SearchBar/SearchBar";
import styles from "./BodyReceitas.module.scss"
import CriarCardReceitaEncontrada from "../../components/Cards/CardReceitaEncontrada/CardReceitaEncontrada";

export default function CriarBodyReceitas(){

    return(
        <div className={styles.pagina}>
            <CriarHeader/>
            <div className={styles.principal}>
                <CriarSearchBar/>
                <div className={styles.cardsReceitasEncontradas}>
                    <CriarCardReceitaEncontrada/>
                    <CriarCardReceitaEncontrada/>
                    <CriarCardReceitaEncontrada/>
                    <CriarCardReceitaEncontrada/>
                    <CriarCardReceitaEncontrada/>
                </div>
            </div>
        </div>
    )
}