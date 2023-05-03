import "./Accueil.scss";
import benoit from "../../assets/benoit.webp";
function Accueil() {
  return (
    <div className="accueil">

      <div className="container-left">
        <img src={benoit} alt="auteur" />
      </div>
      <div className="container-right">
        <h1>HAMAIDE Benoit</h1>
        <p className="subtitle">Développeur Web et Web mobile</p>
        <p className="description">Je suis un développeur web passionné, j'aime travailler en équipe et j'ai une forte éthique de travail. Je suis constamment à la recherche de nouveaux défis et je suis prêt à apprendre de nouvelles technologies pour améliorer mes compétences en développement web.</p>
      </div>
    </div>
  );
}

export default Accueil;
