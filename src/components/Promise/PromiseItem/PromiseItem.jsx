import React from 'react';
import './PromiseItem.scss';
import PromiseCart from '../../blocks/PromiseCart/PromiseCart';

export const PromiseItem = ({ cartInfo }) => {
    return (
        <div className="promise__column">
            {cartInfo.map((item, index) => (
                <PromiseCart
                    key={index}
                    size={item.size}
                    text={item.text}
                    text1={item.text1}
                    price={item.price}
                />
            ))}
        </div>
    )
}
