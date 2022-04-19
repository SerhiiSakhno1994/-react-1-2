import s from './Conteiner.module.css';

function Conteiner({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default Conteiner;
