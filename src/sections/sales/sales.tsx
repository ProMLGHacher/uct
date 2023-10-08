import './sales.css'
import sale1 from '../../assets/sales/sale1.png'
import sale2 from '../../assets/sales/sale2.png'
import sale3 from '../../assets/sales/sale3.png'
import sale4 from '../../assets/sales/sale4.png'
import sale5 from '../../assets/sales/sale5.png'
import sale6 from '../../assets/sales/sale6.png'

const salesArr = [
    {
        title: `Обклейка авто\nпленкой`,
        price: 'от 32 000 ₽',
        isSale: true,
        img: sale1
    },
    {
        title: 'Слесарный\nремонт',
        price: 'от 2 999 ₽',
        isSale: false,
        img: sale2
    },
    {
        title: 'Покраска\nдисков',
        price: 'от 4 000 ₽',
        isSale: true,
        img: sale3
    },
    {
        title: 'Тюнинг выхлопной\nсистемы',
        price: 'от 32 000 ₽',
        isSale: true,
        img: sale4
    },
    {
        title: 'Кузовной\nремонт',
        price: 'от 32 000 ₽',
        isSale: true,
        img: sale5
    },
    {
        title: 'Мойка\nавтомобиля',
        price: 'от 990 ₽',
        isSale: false,
        img: sale6
    }
]

export const Sales = () => {
    return (
        <section className='container sales'>
            {salesArr.map((item) => {
                return <div key={item.title} className='sale-item'>
                    <div className="top">
                        <h3>{item.title}</h3>
                        {item.isSale && <div className='sale-tooltip'>АКЦИЯ</div>}
                    </div>
                    <div className='bottom'>
                        <div className="price">{item.price}</div>
                        <img src={item.img} alt="" />
                    </div>
                </div>
            })}
        </section>
    )
}
