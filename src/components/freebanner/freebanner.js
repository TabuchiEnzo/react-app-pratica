import style from "./freebanner.module.css";
import Png from "./pngtemplates/png.js";
import Figma from "./figmaresponsive/figma.js";
import Custom from "./customtemplates/custom.js";
import Constant from "./constantupdates/constant.js";
import Preco from "./preco/preco.js";
import Button from "./button/button.js";

function FreeBanner() {
  return (
    <>
      <div class={style.banner}>
      <h2>FREE</h2>
        <Png></Png>
        <Figma></Figma>
        <Constant></Constant>
        <Custom></Custom>
        <Preco></Preco>
        <Button></Button>
      </div>
    </>
  );
}

export default FreeBanner;
