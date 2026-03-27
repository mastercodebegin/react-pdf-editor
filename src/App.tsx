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
import { useEffect } from 'react';
registerLicense('Ngo9BigBOggjHTQxAR8/V1JHaF5cWWdCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdlWXxcdnVVRGRcUk10W0pWYEo='); // 👈 must be here

export  const App=()=>{

useEffect(() => {
  const handler = (event) => {
    try {
      const data = JSON.parse(event.data);

      console.log('📩 FROM RN:', data);

      if (data.type === 'TRIGGER_DOWNLOAD') {
        console.log('🔥 Trigger download from RN');

        const viewer = document
          .getElementById('container')
          ?.ej2_instances?.[0];

        if (!viewer) {
          console.log('❌ Viewer not found');
          return;
        }

        viewer.saveAsBlob().then((blob) => {
          console.log('✅ Blob created', blob);

          const reader = new FileReader();
          reader.readAsDataURL(blob);

          reader.onloadend = () => {
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: 'PDF_FILE',
                size: blob.size,
              })
            );
          };
        });
      }
    } catch (e) {
      console.log('❌ Error parsing message', e);
    }
  };

  window.addEventListener('message', handler);

  return () => window.removeEventListener('message', handler);
}, []);
    return (
      <div>
        <h1 style={{position:'absolute'}}>Download</h1>
        <div className="control-section">
          <PdfViewerComponent
  //         toolbarSettings={{
  //   toolbarItems: ['OpenOption', 'PanTool'] // ❌ remove Download
  // }}
  id="container"
  documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
  // serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
  style={{ height: '900px' }}
    downloadStart={(args) => {
    console.log('Download started');

    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ type: 'DOWNLOAD_CLICKED' })
      );
    }
  }}
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