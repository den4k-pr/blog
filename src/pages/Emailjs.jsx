import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/themes/prism.css';

export const EmailJS = () => {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return(
        <section className="projectContent">
            <span className="projectContent-data">Опубликовано: 10 ноября</span>
            <h2 className="projectContent-title">React.JS, Email.JS отправка формы на почту</h2>
            <p className='projectContent-text'>В наше время веб-разработки важно обеспечивать ваши веб-приложения функциональностью отправки форм, чтобы взаимодействовать с пользователями. В этой статье мы рассмотрим, как создать форму на ReactJS и использовать EmailJS для отправки данных на электронную почту. Дополнительно, мы рассмотрим сохранение отправленных данных в "Бочке" (Airtable) для удобного хранения и управления информацией.</p>
            <h3 className='main--title'>Шаг 1: Настройка ReactJS проекта</h3>
            <p className='projectContent-text'>Если у вас уже есть проект на ReactJS, переходите ко второму шагу. Если нет, создайте новый проект:</p>
            <pre>
                <code className="language-javascript">
{`npx create-react-app my-email-form
cd my-email-form
`}
                </code>
            </pre>
            <h3 className='main--title'>Шаг 2: Установка EmailJS</h3>
            <p className='projectContent-text'>Установите пакет EmailJS:</p>
            <pre>
                <code className="language-javascript">
{`npm install emailjs-com`}
                </code>
            </pre>
            <h3 className='main--title'>Шаг 3: Создание формы</h3>
            <p className='projectContent-text'>Создайте компонент формы ContactForm.js:</p>
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

    // Дополнительно: Сохранение данных в "Бочке" (Airtable)
    fetch('https://api.airtable.com/v0/YOUR_BASE_ID/YOUR_TABLE_NAME', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
      body: JSON.stringify({ fields: formData }),
    });

    // Очистка формы после отправки
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Имя:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Сообщение:
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default ContactForm;
`}
                </code>
            </pre>
            <h3 className='main--title'>Шаг 4: Использование формы</h3>
            <p className='projectContent-text'>Используйте созданный компонент формы в своем приложении:</p>
            <pre>
                <code className="language-javascript">
{`import React from 'react';
import ContactForm from './ContactForm';

const App = () => {
  return (
    <div>
      <h1>Моя форма для связи</h1>
      <ContactForm />
    </div>
  );
};

export default App;
`}
                </code>
            </pre>
            <h3 className='main--title'>Заключение</h3>
            <p className='projectContent-text'> className='projectContent-text'Теперь у вас есть работающая форма на ReactJS, использующая EmailJS для отправки данных на почту и сохраняющая информацию в "Бочке" (Airtable). Этот подход обеспечивает не только удобный способ общения с вашими пользователями, но и сохранение данных для последующего анализа.</p>
        </section>
    )
}