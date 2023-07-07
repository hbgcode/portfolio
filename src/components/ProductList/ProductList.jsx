import Product from '../Product/Product'
import './productList.css'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire ........Its Hema</h1>
        <p className="pl-desc">
            qwertyuiolplkjhgfdsxcvbnm dfjsashdkhjwd nbsdjshdjkshdkjdshd
            nsgddgshjasdfhdkjhldfk jdshfkwjeowueeruevdfvb jdfhkhefiueefa
            fkjidsfmsdc....
        </p>
      </div>
      <div className="pl-list">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default ProductList
