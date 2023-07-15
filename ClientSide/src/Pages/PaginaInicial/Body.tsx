import CriarBotao from "../../components/Botoes/Botao";
import CriarCardDespensa from "../../components/Cards/CardDespensa/CardDespensa";
import CriarCardIngredientes from "../../components/Cards/CardIngrediente/CardIngrediente";
import CriarHeader from "../../components/Header/Header";
import CriarSearchBar from "../../components/SearchBars/SearchBar/SearchBar";
import styles from "./Body.module.scss"

export default function CriarBodyInicial(){
    return(
        <>
            <CriarHeader />
            <main className={styles.main}>
                <div className={styles.divisorDespensa}>
                    <h2 className={styles.textoDespensa}>Despensa</h2>
                    <div className={styles.divisorCardBotao}>
                        <div className='CardsDespensa'>
                            <CriarCardDespensa/>
                        </div>
                        <CriarBotao/>
                    </div>
                </div>
                <div className={styles.divisorAddIngredientes}>
                    <h2 className={styles.adicionarIngredientes}>Adicionar ingredientes</h2>
                    <div className={styles.searchBar}>
                        <CriarSearchBar/>
                    </div>
                    <div className={styles.cardsIngredientes}>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                        <CriarCardIngredientes/>
                    </div>
                </div>
            </main>
        </>
    )
}