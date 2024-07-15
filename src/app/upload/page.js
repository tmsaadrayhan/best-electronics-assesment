"use client";
import axios from "axios";
import { useState } from "react";
import Dropzone from "react-dropzone";

const upload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleDrop = async (acceptedFiles) => {
    console.log(acceptedFiles);
    const formData = new FormData();
    acceptedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      // Upload files to Cloudinary
      const res = await axios.post("/api/upload", formData);

      // Store Cloudinary details in state or use as needed
      const uploadedData = res.data;
      setUploadedFiles(uploadedData);
      console.log("Uploaded files:", uploadedData);

      // Send Cloudinary details to backend
      await axios.post("/api/saveCloudinaryDetails", uploadedData);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept="image/*">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <ul>
        {uploadedFiles.map((file, index) => (
          <li key={index}>
            {file.original_filename} - {file.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default upload;
