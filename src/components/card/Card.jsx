import Buton from "../buton/Buton";
//import "./Card.css";
import CardStyle from "./Card.module.css";

const Card = ({ lang, img, btnName }) => {
  return (
    <div>
      <h2 className={CardStyle.title}>{lang}</h2>
      <img className={CardStyle.images} src={img} alt={lang} />

      <Buton btnName={btnName} />
    </div>
  );
};

export default Card;
