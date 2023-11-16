import { SectionProject } from "../components/home/sectionProject";

export const Home = () => {
    return (
        <section>
            <h1 className="title"><span>Świat Kodu:</span> Projekty i Notatki Programisty</h1>
            <SectionProject link="emailjs" data="Opublikowano: 10 listopada" name="React.JS, Email.JS - wysyłanie formularza pocztowego" text="Jak łatwo skonfigurować system wysyłki wiadomości e-mail z React.JS"/>
        </section>
    );
};
