import React from "react";
import {Product} from "./ProductsList";
interface ProductItemProp{
    product : Product;
}

const ProductItem :React.FC <ProductItemProp>= ({product}) =>{
    return (
        <div className="bg-white p-4 shadow-md rounded-md m-4 max-w-xs flex flex-col items-center ">
            <img src={product.image} alt={product.title} className="w-96 h-64 object-contain"/>

            <div className="flex flex-col flex-grow mt-4">
                <h2 className="text-lg font-bold mb-2">{product.title}</h2>
                <p className="text-gray-700 text-left text-sm">{product.description}</p>
                <div className="mt-8 flex items-center justify-between ">
                    <p className="text-gray-700 text-sm">
                        price : ${product.price.toFixed(2)}
                    </p>
                    <button

                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )

}

export default ProductItem;