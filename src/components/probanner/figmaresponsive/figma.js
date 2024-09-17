import Naopossui from '../../../assets/nao_possui.png'
import style from './figma.module.css';

function Png() {
  return (
    <>
      <div class={style.div}>
        <img src={Naopossui} alt="logo"></img>
        <p>Figma responsive components</p>
      </div>
    </>
  );
}

export default Png;
