import Product from '../Product/Product'
import './productList.css'
import {products} from '../../data'

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
        {products.map((item) => (
          <Product id={item.id} link={item.link} img={item.img}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList
