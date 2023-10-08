import './benefits.css'

export const Benefits = () => {
    return (
        <section className='container benefits'>
            <div className="why">
                <div>
                    <h3>Почему UCT?</h3>
                    <h5>UCT — это гарантия не только качества, но и стиля! Доверь свой автомобиль профессионалам!</h5>
                </div>
                <div className='buttons'>
                    <button className='service-invite'>
                        Запись в сервис
                    </button>
                    <button className='consultate'>
                        Консультация
                    </button>
                </div>
            </div>
            <div className="benefits-grid">
                <div className="benefit-item">
                    <img src="src/assets/wash.svg" alt="" />
                    <h5>ОБОРУДОВАНИЕ</h5>
                    <p>Автомойка на 2 поста и лучшее итальянское оборудование</p>
                </div>
                <div className="benefit-item">
                    <img src="src/assets/lift.svg" alt="" />
                    <h5>ПОДЪЕМНИКИ</h5>
                    <p>Рассчитаны на 3,5 и 5 тонн. Поднимем любую машину!</p>
                </div>
                <div className="benefit-item">
                    <img src="src/assets/target.svg" alt="" />
                    <h5>ЦЕНЫ</h5>
                    <p>Лучшие цены и качество на рынке. Довольным будет каждый!</p>
                </div>
                <div className="benefit-item">
                    <img src="src/assets/spray.svg" alt="" />
                    <h5>ПОКРАСКА</h5>
                    <p>Покрасочная камера Spanesi и магнитный стапель.</p>
                </div>
            </div>
        </section>
    )
}
