import { Button, Form, Input, Label } from 'reactstrap';
import styles from './ContactForm.module.scss';
import { courses } from '../../assets/courses.ts';
import { useFormik } from 'formik';

export default function ContactForm() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      course: '',
    },
    onSubmit: values => {
      console.log(values);
      alert(`Parabéns ${values.name}, você receberá todas as informações no seu email!`);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Fale conosco</h2>
      <p className={styles.subtitle}>Preencha o formulário e a nossa equipe irá enviar todas as informações que você precisa.</p>
      <Form onSubmit={formik.handleSubmit} className={styles.form}>
        <Label for="name" className={styles.label}>
          <Input required name="name" id="name" placeholder="Nome" type="text" value={formik.values.name} onChange={formik.handleChange}/>
        </Label>
        <Label for="email" className={styles.label}>
          <Input required name="email" id="email" placeholder="E-mail" type="email" value={formik.values.email} onChange={formik.handleChange}/>
        </Label>
        <select required defaultValue="Curso de interesse" name="course" value={formik.values.course} onChange={formik.handleChange}>
          <option disabled value={'Curso de interesse'}>Curso de interesse</option>
          {courses.map(({name, code}) => <option value={code} key={code}>{name}</option>)}
        </select>
        <Button type="submit" color="primary" className={styles.submitButton}>Enviar</Button>
      </Form>
    </div>
  );
}