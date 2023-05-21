import React, { useState } from 'react';
import {connectJackalandUpload, connectWallet, checkFolder} from '../components/KYCinput/input';

function uploadFileToJackal() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [file, setFile] = useState(null); // Initialize file state with null

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0]; // Get the selected file from the input
    setFile(selectedFile); // Update the file state
  };

  const handleUpload = async () => {
    if (file) {
      const wallet = await connectWallet();
      await connectJackalandUpload(wallet,file); // Pass the file to your function for upload
      const folder = await checkFolder(wallet, "s/kyc");
      console.log("Folder", folder);

    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div>
      <h1>Upload Identification</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default uploadFileToJackal;