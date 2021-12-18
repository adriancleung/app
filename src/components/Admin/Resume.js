import React, { useState } from 'react';
import { Text, FileInput, Button } from 'grommet';
import { submitResume } from '../../services/api';

const Resume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <>
      <Text>Upload Resume:</Text>
      <FileInput
        name={'Resume'}
        multiple={false}
        renderFile={file => {
          return <Text>{file.name}</Text>;
        }}
        onChange={({ target: { files } }) => {
          setSelectedFile(files[0]);
        }}
      />
      <Button onClick={() => submitResume(selectedFile.name, selectedFile)}>
        Submit
      </Button>
    </>
  );
};

export default Resume;
