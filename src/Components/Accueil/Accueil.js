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
        <p className="description">Petite description</p>
      </div>
    </div>
  );
}

export default Accueil;
