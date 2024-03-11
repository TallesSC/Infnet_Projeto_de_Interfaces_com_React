import styles from './Navbar.module.scss';
import { Navbar as ReactstrapNavbar, NavbarBrand } from 'reactstrap';
import classNames from 'classnames';

export default function Navbar() {

  return (
  <ReactstrapNavbar color="light" light expand="md" className={styles.navbar}>
    <div className={classNames('container', styles.container)}>
      <NavbarBrand href="/" className={styles.logo}>
        <img src="/images/infnet_logo.png" alt="Logo Instituto Infnet"/>
        <span>Instituto Infnet</span>
      </NavbarBrand>
    </div>
  </ReactstrapNavbar>
);
}