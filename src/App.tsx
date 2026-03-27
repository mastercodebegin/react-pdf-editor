import './App.css'
import './index.css';
import {
  PdfViewerComponent,
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
  FormDesigner,
  Inject,
} from '@syncfusion/ej2-react-pdfviewer';
import { registerLicense } from '@syncfusion/ej2-base';
registerLicense('Ngo9BigBOggjHTQxAR8/V1JHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdlWXxcdnVVRGRcUk10W0pWYEo='); // 👈 must be here

export  const App=()=>{
    return (
      <div>
        <div className="control-section">
          <h2>hi</h2>
          <PdfViewerComponent
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  // serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
  style={{ height: '900px' }}
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
                FormDesigner,
              ]}
            />
          </PdfViewerComponent>
        </div>
      </div>
    )
}

export default App