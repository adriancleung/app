import React, { useState, useEffect } from 'react';
import { Box, Heading } from 'grommet';
import { ScaleLoader } from 'react-spinners';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import axios from 'axios';
import { SUCCESS_CODE } from '../constants';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = _props => {
  const [resumeLoading, setResumeLoading] = useState(true);
  const [resume, setResume] = useState();

  const fetchResume = () => {
    axios
      .get('https://api.adrianleung.dev/resume')
      .then(res => {
        if (res.status === SUCCESS_CODE) {
          setResume(res.data);
          setResumeLoading(false);
        }
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchResume();
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
          <Document file={`data:application/pdf;base64,${resume}`}>
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
