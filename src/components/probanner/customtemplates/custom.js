import Naopossui from '../../../assets/nao_possui.png'
import style from './custom.module.css';

function Png() {
  return (
    <>
      <div class={style.div}>
        <img src={Naopossui} alt="logo"></img>
        <p>Custom templates</p>
      </div>
    </>
  );
}

export default Png;
