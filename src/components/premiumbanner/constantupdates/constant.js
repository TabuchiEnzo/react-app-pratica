import Naopossui from '../../../assets/nao_possui.png'
import style from './constant.module.css';

function Png() {
  return (
    <>
      <div class={style.div}>
        <img src={Naopossui} alt="logo"></img>
        <p>Constant updates</p>
      </div>
    </>
  );
}

export default Png;
