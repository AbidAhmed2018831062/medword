import {
  Annotation,
  BookmarkView,
  FormFields,
  Inject,
  LinkAnnotation,
  Magnification,
  Navigation,
  PdfViewerComponent,
  Print,
  TextSearch,
  TextSelection,
  ThumbnailView,
  Toolbar,
} from "@syncfusion/ej2-react-pdfviewer";
import * as React from "react";

export default function TextExtract() {
  return (
    <div>
      <div className="control-section">
        <PdfViewerComponent
          id="container"
          documentPath="https://ieeexplore.ieee.org/ielx7/6287639/9668973/09762739.pdf"
          isExtractText={true}
          extractTextCompleted={extractTextCompleted}
          serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
          style={{ height: "640px" }}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              TextSearch,
              Annotation,
              FormFields,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
}
function extractTextCompleted(args) {
  // Extract the Complete text of load document
  console.log(args);
  console.log(args.documentTextCollection[1]);
  // Extract the Text data.
  console.log(args.documentTextCollection[1][1].TextData);
  // Extract Text in the Page.
  console.log(args.documentTextCollection[1][1].PageText);
  // Extract Text along with Bounds
  console.log(args.documentTextCollection[1][1].TextData[0].Bounds);
}
