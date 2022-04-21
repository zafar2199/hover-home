import React, { useEffect, useState } from 'react'

const discounts = {
    oneForFree: {
        minCount: 2,
        free: 1,
        discountRate: 0,
        minPrice: 550,
        categorys: ['smartphone', 'tv', 'accessories'],
    },
    exceedSum: {
        minCount: 1,
        free: 0,
        minPrice: 50,
        discountRate: 15,
        categorys: ['smartphone', 'tv', 'accessories'],
    },
}

const Cart = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Samsung S21',
            count: 2,
            price: 1200,
            total: 2400,
            category: 'smartphone',
            appliedDiscounts: [],
        },
        {
            id: 2,
            name: 'Iphone 13',
            count: 1,
            price: 600,
            total: 999.99,
            category: 'smartphone',
            appliedDiscounts: [],
        },
    ])

    function checkDiscount(products, discounts) {
        for (let index = 0; index < products.length; index++) {
            const { count, price, category, name } = products[index]

            for (const key in discounts) {
                const { minCount, minPrice, categorys, discountRate, free } =
                    discounts[key]

                if (
                    count >= minCount &&
                    price >= minPrice &&
                    categorys.includes(category)
                ) {
                    const totalPrice = price * count
                    const percentage =
                        discountRate !== 0
                            ? (totalPrice * discountRate) / 100
                            : 0
                    let newArr = [...products]
                    newArr[index].count = products[index].count + free
                    newArr[index].total = totalPrice - percentage
                    newArr[index].appliedDiscounts.push(key)
                    setProducts(newArr)
                }
            }
        }
    }

    useEffect(() => {
        checkDiscount(products, discounts)
    }, [])
    console.log(products)
    return (
        <div className='cart'>
            {products.map(({ id, name, count, price, total }) => (
                <div className='product' key={id}>
                    <h3 className='product__name'>{name}</h3>
                    <h2>maxsulot narxi : {price}</h2>
                    <h2>umumiy narxi: {total}</h2>
                </div>
            ))}
        </div>
    )
}

export default Cart

const final = [
    {
        id: 1,
        name: 'Samsung S21',
        count: 3,
        price: 1130.42,
        total: 2560.84,
        category: 'smartphone',
        appliedDiscounts: ['oneForFree', 'exceedSum'],
    },
    {
        id: 2,
        name: 'Iphone 13',
        count: 1,
        price: 869.55,
        total: 869.55,
        category: 'smartphone',
        appliedDiscounts: ['exceedSum'],
    },
]
