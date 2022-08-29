import ItemCount from "./ItemCount"


const ItemListContainer = ({nameEcommerce}) => {
    const stockItem = 15
    const initialCount = 1
  return (
    <>
        <h1>{nameEcommerce}</h1>
        <ItemCount stock={stockItem} initial={initialCount}/>
    </>
  )
}

export default ItemListContainer