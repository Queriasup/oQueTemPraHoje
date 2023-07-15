import styles from './App.module.scss'
import CreateHeader from './components/Header/Header.tsx'
import CriarBodyInicial from './Pages/PaginaInicial/Body.tsx'

export default function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <CreateHeader />
      <CriarBodyInicial />
    </>
  )
}

