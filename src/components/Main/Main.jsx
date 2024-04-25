import React from 'react'
import './Main.scss'
import Button from '../blocks/Button/Button'

export default function Main() {
    const isShowButton = true;
    // const isHiddenButton = false;

    return (
        <div className='main'>
            <div className="container">
                <div className="main__wrap">
                    <p className="main__title font-dancing-script">
                        <span className="font-dancing-script">Строительство деревянных домов</span> под ключ в Курске
                    </p>
                    <p className="main__text">
                        Построим теплый и надежный дом
                        <span> с гарантией 10 лет</span>
                    </p>
                    {isShowButton && <Button class_btn={'main__btn'}>рассчитать стоимость</Button>}
                </div>
            </div>
        </div>
    )
}
