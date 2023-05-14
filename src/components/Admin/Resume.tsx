import React, { useState } from 'react';
import { Text, FileInput, Button } from 'grommet';
import api from '../../services/api';

type Props = {};

const Resume: React.FC<Props> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>();
  return (
    <>
      <Text>Upload Resume:</Text>
      <FileInput
        name={'resume'}
        multiple={false}
        renderFile={file => {
          return <Text>{file.name}</Text>;
        }}
        onChange={e => {
          setSelectedFile(e?.target?.files && e.target.files[0]);
        }}
      />
      <Button
        onClick={async () => {
          try {
            if (!selectedFile) {
              alert('No file selected');
              return;
            }
            const response = await api.resume.update(selectedFile);
            if (response === 'OK') {
              alert('Resume updated');
            } else {
              alert('Could not update resume');
            }
          } catch (err) {
            console.error(err);
            alert('Could not update resume');
          }
        }}>
        Submit
      </Button>
    </>
  );
};

export default Resume;
