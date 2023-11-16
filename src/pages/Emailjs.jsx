import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/themes/prism.css';

export const EmailJS = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <section className="projectContent">
            <span className="projectContent-data">Opublikowano: 10 listopada</span>
            <h2 className="projectContent-title">React.JS, Email.JS - wysyłanie formularza pocztowego</h2>
            <p className='projectContent-text'>W dzisiejszych czasach w rozwoju aplikacji internetowych ważne jest, aby zapewnić funkcjonalność wysyłania formularzy, aby móc wchodzić w interakcję z użytkownikami. W tym artykule omówimy, jak stworzyć formularz w ReactJS i użyć EmailJS do wysyłania danych na adres e-mail. Dodatkowo, rozważymy zapisywanie wysłanych danych w "Bocie" (Airtable) dla wygodnego przechowywania i zarządzania informacjami.</p>
            <h3 className='main--title'>Krok 1: Konfiguracja projektu ReactJS</h3>
            <p className='projectContent-text'>Jeśli już masz projekt w ReactJS, przejdź do drugiego kroku. Jeśli nie, utwórz nowy projekt:</p>
            <pre>
                <code className="language-javascript">
                    {`npx create-react-app my-email-form
cd my-email-form
`}
                </code>
            </pre>
            <h3 className='main--title'>Krok 2: Instalacja EmailJS</h3>
            <p className='projectContent-text'>Zainstaluj pakiet EmailJS:</p>
            <pre>
                <code className="language-javascript">
                    {`npm install emailjs-com`}
                </code>
            </pre>
            <h3 className='main--title'>Krok 3: Tworzenie formularza</h3>
            <p className='projectContent-text'>Stwórz komponent formularza ContactForm.js:</p>
            <pre>
                <code className="language-javascript">
                    {`import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Dodatkowo: Zapisywanie danych w "Bocie" (Airtable)
    fetch('https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({ fields: formData }),
    });

    // Wyczyszczenie formularza po wysłaniu
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Wiadomość:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default ContactForm;
`}
                </code>
            </pre>
            <h3 className='main--title'>Krok 4: Użycie formularza</h3>
            <p className='projectContent-text'>Użyj stworzonego komponentu formularza w swojej aplikacji:</p>
            <pre>
                <code className="language-javascript">
                    {`import React from 'react';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <h1>Mój formularz kontaktowy</h1>
      <ContactForm />
    </div>
  );
};

export default App;
`}
                </code>
            </pre>
            <h3 className='main--title'>Podsumowanie</h3>
            <p className='projectContent-text'>Teraz masz działający formularz w ReactJS, korzystający z EmailJS do wysyłania danych na adres e-mail i zapisujący informacje w "Bocie" (Airtable). Ten podejście zapewnia nie tylko wygodny sposób komunikacji z użytkownikami, ale także zapisywanie danych do późniejszej analizy.</p>
        </section>
    );
};
