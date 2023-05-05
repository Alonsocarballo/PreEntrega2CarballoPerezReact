import { useEffect, useState } from "react"
import { getproducts, getProductByid } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const asyncfunc = categoryId ? getProductByid : getproducts
    asyncfunc(categoryId)
      .then(response => {
        if (category) {
          const filteredProducts = response.filter(product => product.category === category)
          setProducts(filteredProducts)
        } else {
          setProducts(response)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }, [categoryId, category])

  return (
    <div>
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer


// import { useEffect, useState } from "react"
// import { getproducts } from '../../AsyncMock'
// import { getProductByid } from "../../AsyncMock"
// import ItemList from '../ItemList/ItemList'
// import { useParams } from "react-router-dom"



// const ItemListContainer = ({ greeting}) => {
//     const [products,setProducts]=useState([])

//     const {categoryId}= useParams ()

//     useEffect ( () => {
//         const asyncfunc = categoryId? getProductByid: getproducts
//         asyncfunc(categoryId)
//         .then (response => {
//             setProducts(response)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }, [categoryId])

//     return(
//         <div>
//             <h1>{greeting}</h1>
//             <ItemList products={products}/>
//         </div>
//     )
// }

// export default ItemListContainer