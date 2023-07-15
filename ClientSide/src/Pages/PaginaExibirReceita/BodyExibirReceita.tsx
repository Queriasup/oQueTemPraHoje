import CriarHeader from "../../components/Header/Header";
import styles from "./BodyExibirReceita.module.scss"

export default function CriarBodyExibirReceita() {

    return (
        <div className={styles.pagina}>
            <CriarHeader />
            <div className={styles.receita}>
                <div className={styles.left}>
                    <div className={styles.imagem}>
                        <img src="https://fyoti.com.br/wp-content/uploads/2022/08/Receita-de-Bolo-de-chocolate-decorado.jpg" alt="imagem-receita" />
                    </div>
                    <div className={styles.ingredientes}>
                        <ul>
                            <li>2 xícaras de farinha de trigo</li>
                            <li>1 xícara de cacau em pó</li>
                            <li>2 xícaras de açúcar</li>
                            <li>2 colheres de chá de fermento em pó</li>
                            <li>1 colher de chá de bicarbonato de sódio</li>
                            <li>1/2 colher de chá de sal</li>
                            <li>2 ovos grandes</li>
                            <li>1 xícara de leite</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.textoReceita}>
                        <h2>Bolo de Chocolate com Morangos</h2>
                        <p>Prepare-se para se deliciar com um incrível bolo de chocolate com cobertura de ganache e morangos frescos. Esta receita é perfeita para aqueles momentos em que você deseja surpreender seus convidados com uma sobremesa irresistível. O bolo macio e úmido, combinado com a rica e sedosa ganache de chocolate e os morangos frescos, resultam em uma combinação de sabores e texturas que irão encantar seu paladar.
                        </p>

                        <p><b>Modo de preparo:</b></p>

                        <p>
                        1. Pré-aqueça o forno a 180°C e unte uma forma redonda com manteiga e farinha de trigo. 
                        2. Em uma tigela grande, peneire 2 xícaras de farinha de trigo, 1 xícara de cacau em pó, 2 xícaras de açúcar, 2 colheres de chá de fermento em pó e 1 colher de chá de bicarbonato de sódio. Misture bem os ingredientes secos. <br/>
                        3. Em outra tigela, adicione 2 ovos, 1 xícara de leite e 1/2 xícara de óleo vegetal. Bata os ingredientes líquidos até obter uma mistura homogênea. <br/>
                        4. Despeje a massa na forma previamente preparada, nivelando a superfície com uma espátula. <br/>
                        5. Leve ao forno pré-aquecido e asse por aproximadamente 30 a 35 minutos, ou até que um palito inserido no centro do bolo saia limpo. <br/>
                        6. Retire o bolo do forno e deixe esfriar na forma por alguns minutos. Em seguida, transfira para uma grade de resfriamento e deixe esfriar completamente. <br/>
                        7. Enquanto o bolo esfria, você pode preparar uma cobertura de sua preferência, como ganache de chocolate, buttercream ou brigadeiro. <br/>
                        8. Após o bolo estar completamente frio, despeje a cobertura escolhida sobre o bolo, espalhando uniformemente com uma espátula. <br/>
                        9. Decore o bolo de chocolate com raspas de chocolate, morangos frescos, confeitos ou o que preferir. <br/>
                        </p>
                                      
                    </div>
                </div>
            </div>
        </div>
    )
}