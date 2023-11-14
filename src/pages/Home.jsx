import { SectionProject } from "../components/home/sectionProject"


export const Home = () => {
    return(
        <section >
            <h1 className="title"><span>Кодовый Мир:</span> Проекты и Заметки Программиста</h1>
            <SectionProject link="emailjs" data="Опубликовано: 10 ноября" name="React.JS, Email.JS отправка формы на почту" text="Как легко настроить систему отправки писем на электронную почту с React.JS"/>
        </section>
    )
}