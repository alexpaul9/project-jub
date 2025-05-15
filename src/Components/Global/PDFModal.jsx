import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PDFModal.css';


function PDFModal({ file = "./view.pdf", onClose }) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-modal-overlay">
      <button className="pdf-modal-close" onClick={onClose}>&times;</button>
      <div className="pdf-modal-content">
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="pdf-pages-container">
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={window.innerWidth > 900 ? 800 : window.innerWidth - 40}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </div>
        </Document>
        <div className="pdf-page-count">
          {numPages && `Total Pages: ${numPages}`}
        </div>
      </div>
    </div>
  );
}

export default PDFModal;
