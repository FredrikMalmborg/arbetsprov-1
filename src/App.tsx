import "./App.style.css"
import Posts from './posts/Posts'
import Btn from './components/Btn'
import Header from './Header'
import Modal from './modal/Modal'
import { useDispatch } from "react-redux"

function App() {

  const dispatch = useDispatch()
  const showMore = () => dispatch({ type: "SHOW_MORE" })

  return (
    <main>
      <Header />

      <Posts />

      <Modal />

      <Btn label="show more" onClick={showMore} type="block" />
    </main>
  );
}

export default App;
