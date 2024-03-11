import styles from './Home.module.scss';
import ContactForm from '../../components/ContactForm/ContactForm.tsx';

export default function Home() {
  return (
    <div className="container">
      <div className={styles.layout}>
        <div className={styles.content}>
          <ContactForm/>
          <img className={styles.image} src="/images/students.jpg" alt="Estudantes em sala de aula" loading="lazy"/>
        </div>
      </div>
    </div>
  );
}