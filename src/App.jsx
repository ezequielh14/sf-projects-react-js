import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
    const titleEcommerce = "Gaming E-commerce"
  return (
    <div className="container text-bg-dark">
        <NavBar />
        <ItemListContainer nameEcommerce={titleEcommerce}/>
    </div>
  )
}

export default App