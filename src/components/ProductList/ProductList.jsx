import Product from '../Product/Product'
import './productList.css'
import {products} from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
      <div className="pl-texts">
        <h1 className="pl-title">Framework & Database Experience</h1>
        <p className="pl-desc">
        By leveraging these frameworks, I have been able to create aesthetically pleasing, functional, and user-centric websites that meet the modern standards of web development.
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
