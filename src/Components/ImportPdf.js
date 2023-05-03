import pdfFile from '../assets/cvBenoit.pdf';
import './ImportPdf.scss'

function ImportPdf() {
   const handleDownload = () => {
    const url = pdfFile;
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'cvBenoit.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Télécharger mon cv
    </button>
  );
}

export default ImportPdf;
