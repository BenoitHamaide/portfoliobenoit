import "./Accueil.scss";
import benoit from "../../assets/benoit.jpg";
import { Fab } from "@mui/material";
import { Mail } from "@mui/icons-material";

function Accueil() {
  return (
    <div className="accueil">
      <div className="contain">
      <div className="container-left">
        <img src={benoit} alt="auteur" />
      </div>
      <div className="container-right">
        <h1>Benoît HAMAÏDE</h1>
        <p className="subtitle">Développeur Web et Web Mobile</p>
        <p className="description">Je suis un développeur web passionné, j'aime travailler en équipe et j'ai une forte éthique de travail.
        </p>
        <p>Constamment à la recherche de nouveaux défis, je suis prêt à apprendre de nouvelles technologies pour améliorer mes compétences en développement web.</p>
      </div> <Fab className="Mail"
      size="large" >
          <a href={`mailto:${'hamaidebenoit@gmail.com'}`}>
             <Mail />
          </a>
         </Fab>
      </div>
       
    </div>
  );
}

export default Accueil;
