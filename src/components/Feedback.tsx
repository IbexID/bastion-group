import React from 'react';
import cl from './Feedback.module.scss'

const Feedback: React.FC = () => {
    return (
        <form className={cl.feedback}>
            <input type="text" placeholder='Ваше имя' className={cl.feedback__input} />
            <input type="text" placeholder='Ваш телефон' className={cl.feedback__input} />
            <div className={cl.feedback__item}>
                <button className={cl.feedback__button}>Заказать звонок</button>
                <p className={cl.feedback__text}>Нажимая на кнопку, вы соглашаетесь с <a className={cl.feedback__link} href="#">политикой конфиденциальности</a></p>
            </div>
        </form>
    );
};

export default Feedback;