import { useState } from "react"
import Swal from "sweetalert2"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({stock, initial}) => {

    const [itemCount, setItemCount] = useState(initial)

    const count = () => {
        if(itemCount >= stock){
            return Swal.fire({
                title: 'Error!',
                text: 'The limit is 15 items!',
                icon: 'error'
              })
        }

        setItemCount(itemCount+1)
    }

    const decreaseCount = () => {
        if(itemCount <= 0){
            return Swal.fire({
                title: 'Error!',
                text: 'You cannot enter negative values!',
                icon: 'error'
              })
        }
        setItemCount(itemCount-1)
    }

  return (
    <>
        <button className="btn btn-outline-primary d-inline me-3" onClick={decreaseCount}><FontAwesomeIcon icon={faMinus} /></button>
        <h3 className="d-inline">{itemCount}</h3>
        <button className="btn btn-outline-primary d-inline m-3" onClick={count}><FontAwesomeIcon icon={faPlus} /></button>
    </>
  )
}

export default ItemCount