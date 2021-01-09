import React, { useState, useEffect } from 'react';
import { Box, Heading } from 'grommet';
import { ScaleLoader } from 'react-spinners';
import { Document, Page, pdfjs } from 'react-pdf';
import { SUCCESS_CODE } from '../../constants';
import { getResume } from '../../services/api';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = _props => {
  const [resumeLoading, setResumeLoading] = useState(true);
  const [resume, setResume] = useState();

  const loadResume = () => {
    getResume()
      .then(res => (res.status === SUCCESS_CODE ? setResume(res.data) : null))
      .catch(err => console.error(err))
      .finally(() => setResumeLoading(false));
  };

  useEffect(() => {
    loadResume();
  }, []);

  return (
    <Box height={'100%'}>
      <Heading>Resume</Heading>
      <Box height={'100%'} justify={'center'} align={'center'}>
        <ScaleLoader
          loading={resumeLoading}
          height={60}
          width={10}
          radius={20}
          color={'white'}
        />
        {!resumeLoading && (
          <Document
            file={resume ? `data:application/pdf;base64,${resume}` : null}
            noData={'Failed to load PDF file.'}>
            <Page
              scale={
                window.screen.width < 600
                  ? 0.5
                  : window.screen.width < 768
                  ? 0.6
                  : window.screen.width < 992
                  ? 0.7
                  : window.screen.width < 1200
                  ? 0.8
                  : 0.9
              }
              pageNumber={1}
            />
          </Document>
        )}
      </Box>
    </Box>
  );
};

export default Resume;
