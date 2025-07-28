import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useWindowDimensions } from "@/hooks";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
interface PdfProps {
  src: string;
  height?: number;
}
function PDFViewer({ src }: PdfProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { width } = useWindowDimensions();

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }): void => setNumPages(numPages);

  const nextPage = () => setPageNumber(v => ++v);

  const prevPage = () => setPageNumber(v => --v);

  return (
    <>
    
    <div className="flex flex-row w-full text-center justify-center">
      <button onClick={prevPage} disabled={pageNumber <= 1} className={"p-5"}>
      <ChevronLeft className={pageNumber <= 1 ? "hidden" : ""} />
      </button>
      <Document
        file={src}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} scale={width > 576 ? 0.80 : 0.50} />
      </Document>
      <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)} className="p-5">
      <ChevronRight />
      </button>
    </div>
      <p className='text-center'>
        Page {pageNumber} of {numPages}
      </p>
    </>
  );
}

export { PDFViewer };
