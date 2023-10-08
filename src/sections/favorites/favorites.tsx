import { useRef } from 'react'
import arrowRight from '../../assets/arrow_right.svg'
import { Carousel } from '../../components/carousel/carousel'

import './favorites.css'

const items = [
    {
        img: '/src/assets/car1.png',
        imgNum: 3,
        title: 'Бронирование автомобиля пленкой Illumar',
    },
    {
        img: '/src/assets/car2.png',
        imgNum: 5,
        title: 'Тюнинг выхлопной системы на Porsche GT',
    },
    {
        img: '/src/assets/car3.png',
        imgNum: 3,
        title: 'Техническое обслуживание Chevrolet Camaro',
    },
    {
        img: '/src/assets/car4.png',
        imgNum: 3,
        title: 'Детейлинг-мойка с глубокой химчисткой салона',
    },
    {
        img: '/src/assets/car1.png',
        imgNum: 3,
        title: 'Бронирование автомобиля пленкой Illumar',
    },
    {
        img: '/src/assets/car2.png',
        imgNum: 5,
        title: 'Тюнинг выхлопной системы на Porsche GT',
    },
    {
        img: '/src/assets/car3.png',
        imgNum: 3,
        title: 'Техническое обслуживание Chevrolet Camaro',
    },
    {
        img: '/src/assets/car4.png',
        imgNum: 3,
        title: 'Детейлинг-мойка с глубокой химчисткой салона',
    },
    {
        img: '/src/assets/car1.png',
        imgNum: 3,
        title: 'Бронирование автомобиля пленкой Illumar',
    },
    {
        img: '/src/assets/car2.png',
        imgNum: 5,
        title: 'Тюнинг выхлопной системы на Porsche GT',
    },
    {
        img: '/src/assets/car3.png',
        imgNum: 3,
        title: 'Техническое обслуживание Chevrolet Camaro',
    },
    {
        img: '/src/assets/car4.png',
        imgNum: 3,
        title: 'Детейлинг-мойка с глубокой химчисткой салона',
    }
]

const Favorites = () => {

    const leftIconRef = useRef(null)
    const rightIconRef = useRef(null)

    return (
        <div>
            <div className="container favorites">
                <div className="head">
                    <h2>Избранные работы</h2>
                    <div className='arrows'>
                        <img ref={leftIconRef} className='arrow left' src={arrowRight} alt="" />
                        <img ref={rightIconRef} className='arrow active' src={arrowRight} alt="" />
                    </div>
                </div>
                <Carousel items={items} leftScrollButton={leftIconRef} rightScrollButton={rightIconRef} />
                <div className="sotials">
                    <p className='invite'>Присоединяйтесь к нам<br/>в социальных сетях:</p>
                    <div className='sotial-items'>
                        <a href='#' className="sotial-item">
                            <img className='sotioal-icon' src="src/assets/vk.svg" alt="vk" />
                            <p>ВКонтакте</p>
                        </a>
                        <a href='#' className="sotial-item">
                            <img className='sotioal-icon' src="src/assets/instagram.png" alt="instagram" />
                            <p>Instagram</p>
                        </a>
                        <a href='#' className="sotial-item">
                            <img className='sotioal-icon' src="src/assets/youtube.svg" alt="youtube" />
                            <p>YouTube</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites
