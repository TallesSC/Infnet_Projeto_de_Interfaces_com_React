export const courses: Course[] = [
  {name: 'Arquitetura de Software', code: 'ARQSOFT'},
  {name: 'Desenvolvimento Web Full Stack', code: 'WEBFS'},
  {name: 'Desenvolvimento Mobile: Android, iOS e Multiplataforma', code: 'DMMULTI'},
  {name: 'Engenharia de Software com Java', code: 'ENGSOFTJAVA'},
  {name: 'Engenharia de Banco de Dados com Oracle, SQL Server e Cloud DB', code: 'ENGBDD'},
  {name: 'Engenharia de Dados: Big Data', code: 'ENGDADOS'},
  {name: 'Data Science (Ciência de Dados)', code: 'DATASCIENCE'},
];

interface Course {
  name: string,
  code: string
}