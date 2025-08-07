import React from 'react'

const Price = ({ originalPrice, salePrice }) => {
    const safeOriginal = typeof originalPrice === 'number' ? originalPrice : 0
    const safeSale = typeof salePrice === 'number' ? salePrice : null
    
    return (
        <div className="book__price">
            {safeSale ? (
                <>
                    <span className="book__price--normal">${safeOriginal.toFixed(2)}</span>
                    {safeSale.toFixed(2)}
                </>
            ) : (
                <>${safeOriginal.toFixed(2)}</>
            )}
        </div>
    )
}

export default Price