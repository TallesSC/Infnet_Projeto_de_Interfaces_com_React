import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        Instituto Infnet Rio de Janeiro. – CNPJ: 00.673.757/0001-46. Rua São José, 90 – Centro, Rio de Janeiro/RJ – 20010-020
      </div>
    </footer>
  );
}