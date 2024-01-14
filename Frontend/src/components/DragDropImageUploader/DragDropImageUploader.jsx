import React, { useState, useRef } from "react";
import "./DragDropImageUploader.css";

const DragDropImageUploader = () => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFile() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const selectedImage = files[0];
    setImage(URL.createObjectURL(selectedImage));
  }

  function removeImage() {
    setImage(null);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    // Do something with the dropped file
    // For example, you can call a function to handle the file
    handleDroppedFile(file);
  }

  function handleDroppedFile(file) {
    // Handle the dropped file here
    setImage(URL.createObjectURL(file));
  }

  return (
    <div className="card">
      <div className="top">
        <p>Drag & Drop image uploading</p>
      </div>
      <div
        className={`drag-area ${isDragging ? "dragging" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {image ? (
          <div className="image">
            <span className="delete" onClick={removeImage}>
              &times;
            </span>
            <img id="chosen-img" src={image} alt="" />
          </div>
        ) : (
          <span className="select" role="button" onClick={selectFile}>
            Browse
          </span>
        )}

        <input
          name="file"
          type="file"
          className="file"
          ref={fileInputRef}
          onChange={onFileSelect}
          accept="image/*"
        />
      </div>

      {image && (
        <button onClick={() => console.log("Upload logic here")}>Upload</button>
      )}
    </div>
  );
};

export default DragDropImageUploader;
