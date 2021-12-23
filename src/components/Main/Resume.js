import React from 'react';
import { Box, Button, Heading } from 'grommet';
import { Document, Page, pdfjs } from 'react-pdf';
import { API_URL } from '../../constants';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = _props => {
  return (
    <Box height={'100%'}>
      <Heading>Resume</Heading>
      <Box height={'100%'} justify={'center'} align={'center'}>
        <Document
          file={`${API_URL}/resume`}
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
        <Button
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            color: 'black',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            margin: 10,
          }}
          hoverIndicator={true}
          label={'Download Resume'}
          size={'small'}
          href={`${API_URL}/resume?download=true`}
        />
      </Box>
    </Box>
  );
};

export default Resume;
