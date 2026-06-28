import React, { useState } from 'react';
import { Animate } from 'easemotion-react';

export default function Dropzone() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setIsDragging(true);
    if (e.type === 'dragleave' || e.type === 'drop') setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <Animate 
        tag="div"
        // Combining Tailwind structural classes with EaseMotion interactions
        className={`border-4 border-dashed rounded-xl p-12 text-center transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
        hover="scale"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!file ? (
          <Animate type="fade-in">
            <h3 className="text-gray-500 text-lg font-medium">Drag and drop a file here</h3>
          </Animate>
        ) : (
          <Animate type="bounce" duration="fast">
            <div className="text-blue-600 font-bold text-xl">
              📄 {file.name}
            </div>
            <p className="text-sm text-gray-400 mt-2">Ready to upload</p>
          </Animate>
        )}
      </Animate>
    </div>
  );
}
