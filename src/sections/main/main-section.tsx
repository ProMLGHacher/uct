import './main-section.css'
import logo from '../../assets/logo.svg'
import burger from '../../assets/burger.svg'
import messages from '../../assets/messages.svg'
import arrowRight from '../../assets/arrow_right.svg'

type Props = {}

const MainSection = (props: Props) => {
  return (
    <section className='container main-section'>
      <header className='main-header'>
        <div className='left-side'>
          <img src={logo} alt="logo" className='logo' />
          <div className="menu-button">
            <img src={burger} alt='burger' className="burger" />
            <span>Услуги</span>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Работы</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <a href='tel:+74952077570'>+7 495 207-75-70</a>
        </nav>
      </header>
      <div className="divider" />
      <main>
        <h1>Премиальное обслуживание вашего автомобиля</h1>
        <div className="buttons">
          <button className="entry">Запись в сервис <img src={arrowRight} alt="entry arrow" /></button>
          <button className="consultation"><img src={messages} alt="consultation messages logo" /> Консультация</button>
        </div>
      </main>
    </section>
  )
}

export default MainSection