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
            <h2 className="main--title">Napisz do nas</h2>
            <p className="main--text">Potrzebujesz pomocy w programowaniu? Napisz, aby szybko uzyskać wsparcie od doświadczonych programistów.</p>
            <form onSubmit={handleSubmit} className="about--contact-form">
                <label>Imię</label>
                <input type="text" name="name" required/>
                <label>Adres e-mail</label>
                <input type="email" name="email" required/>
                <label>Temat</label>
                <input type="text" name="title" required/>
                <label>Wiadomość</label>
                <textarea name="message" required></textarea>
                <button>{isSubmitting ? "Ładowanie..." : "Wyślij"}</button>
            </form>
            <p className="main--text" style={{color: "green", paddingTop: "15px"}}>{isSaccess && "Wiadomość została pomyślnie wysłana"}</p>
            <p className="main--text" style={{color: "red", paddingTop: "15px"}}>{isError && "Wystąpił błąd, spróbuj ponownie później"}</p>
        </section>

    )
}
