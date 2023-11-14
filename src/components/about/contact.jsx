import { useState } from "react";
import emailjs from 'emailjs-com';

export const AboutContact = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSaccess, setIsSaccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        setIsSubmitting(true);
    
        const templateParams = {
          name: name,
          lastName: lastName,
          email: email,
          tel: tel,
          message: message,
        };
    
        try {
          await emailjs.send(
            'service_ugc7dcw',
            'template_2ueaqn1',
            templateParams,
            'B3uHEg9VYxDRxtTJq',
          );
          console.log('Email sent successfully!');
          setIsSaccess(true);
        } catch (error) {
          console.error('Error sending email:', error);
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        }
    
        setIsSubmitting(false);
    
        // Очистити поля форми після відправлення
        setTimeout(() => {
          setIsSaccess(false);
          window.location.reload();
        }, 1000);
    
        setName('');
        setLastName('');
        setEmail('');
        setTel('');
        setMessage('');
      };

    return(
        <section className="about--contact">
            <h2 className="main--title">Напишите нам</h2>
            <p className="main--text">Нужна помощь в разработке? Напишите, чтобы быстро найти помощь от опытных разработчиков.</p>
            <form onSubmit={handleSubmit} className="about--contact-form">
                <label>Имя</label>
                <input type="text" name="name" required/>
                <label>Електронная пошта</label>
                <input type="email" name="email" required/>
                <label>Тема</label>
                <input type="text" name="title" required/>
                <label>Сообщение</label>
                <textarea name="message" required></textarea>
                <button>{isSubmitting ? "Loading..." : "Отправить"}</button>
            </form>
            <p className="main--text" style={{color: "green", paddingTop: "15px"}}>{isSaccess && "Сообщение успешно отправлено"}</p>
            <p className="main--text" style={{color: "red", paddingTop: "15px"}}>{isError && "Произошла ошибка, попробуйте позже"}</p>
        </section>
    )
}