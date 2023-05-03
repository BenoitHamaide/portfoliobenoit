import cvBenoit from '../assets/cvBenoit.pdf';
import './ImportPdf.scss'
import { saveAs } from 'file-saver';

function ImportPdf() {
    const handleDownload = () => {
        saveAs(cvBenoit, "cvBenoit.pdf");
      };
    
      return (
        <button onClick={handleDownload}>
          Télécharger le CV
        </button>
      );
    }
export default ImportPdf
