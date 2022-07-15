import React from 'react';
import Feedback from './Feedback';
import cl from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.footer__feedback}>
                <Feedback />
            </div>
            <div className={cl.footer__content}>
                <img className={cl.footer__logo} src={require('../images/footer__logo.png')} alt="logo" />
                <nav className={cl['footer__content-links']}>
                    <a href="#">Металлоконструкции</a>
                    <a href="#">Фасадные конструкции</a>
                    <a href="#">Порошковая покраска</a>
                    <a href="#">Светопрозрачные конструкции</a>
                </nav>
                <div className={cl.footer__contacts}>
                    <p className={cl['footer__contacts-phone']}><a href="tel:+74993807890">+7 (499) 380-78-90</a></p>
                    <p className={cl['footer__contacts-email']}><a href='mailto:info@bastion.pro'>info@bastion.pro</a></p>
                </div>
            </div>
            <div className={cl.footer__copyright}>
                <p className={cl['footer__copyright-text']}>© 2020 Все права защищены | <a href='#'>Политика конфеденциальности</a></p>
                <div className={cl['footer__copyright-social']}>
                    <a className={cl['footer__social-link']} href='#'>
                        <img className={cl['footer__social-icon']} src={require('../images/icons/whatsapp.svg').default} alt="whatsapp" />
                    </a>
                    <a className={cl['footer__social-link']} href='#'>
                        <img className={cl['footer__social-icon']} src={require('../images/icons/telegram.svg').default} alt="telegram" />
                    </a>
                    <a className={cl['footer__social-link']} href='#'>
                        <img className={cl['footer__social-icon']} src={require('../images/icons/vk.svg').default} alt="vk" />
                    </a>
                    <a className={cl['footer__social-link']} href='#'>
                        <img className={cl['footer__social-icon']} src={require('../images/icons/instagram.png')} alt="instagram" />
                    </a>
                    <a className={cl['footer__social-link']} href='#'>
                        <img className={cl['footer__social-icon']} src={require('../images/icons/facebook.png')} alt="facebook" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;