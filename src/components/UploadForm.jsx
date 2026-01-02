import React, { useState } from "react";

function UploadForm() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [status, setStatus] = useState("");
  const [previews, setPreviews] = useState([]);

  const [fileCount, setFileCount] = useState(0);



  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFileCount(files.length);
    setSelectedFiles(files);

    const filePreviews = files.map(file => ({
      name: file.name,
      type: file.type,
    }));

    setPreviews(filePreviews)
  };
  const handleUpload = () => {
    selectedFiles.forEach((file) => {
      console.log(file);
    });
  };


  console.log(`Files selected ${fileCount}`)

  return (
    <section id="file-upload-form" className="w-full">
      <div className="w-full flex flex-col justify-center items-center bg-blue-700/80 border border-blue-700 rounded-xl py-10">
        <p className="font-bold text-4xl text-gray-50/90">Upload Photos</p>
        {/* <input
          type="file"
          multiple
          onChange={handleFileChange}
          accept="image/*,.heic"
          className="mt-5 text-gray-50/90 text-xl w-full"
        /> */}

        <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto p-4">
          {/* 1. The Container/Label - This acts as the visual "button" */}
          <label
            htmlFor="file-upload"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-blue-300 rounded-xl cursor-pointer bg-blue-50 hover:bg-blue-100 hover:border-blue-400 transition-all duration-300"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {/* Upload Icon */}
              <svg
                className="w-12 h-12 mb-4 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>

              <p className="mb-2 text-sm text-gray-700">
                <span className="font-bold text-blue-600">Click to upload</span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                HEIC, JPEG, or JPG (Max 1 TB total storage)
              </p>
            </div>

            {/* 2. The Secret Input - This is hidden but functional */}
            <input
              id="file-upload"
              type="file"
              multiple // Allows picking many files
              accept=".heic,.jpg,.jpeg" // Filters the file browser
              className="hidden" // Tailwind utility to hide the default look
              onChange={handleFileChange}
            />
          </label>

          {/* 3. Status Display */}
          {fileCount > 0 && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg w-full text-center font-medium animate-pulse">
              ✅ {fileCount} files selected and ready for backup!
            </div>
          )}
        </div>

        <div className="w-full max-w-xl">
          <div className="p-4 w-full">
            {previews.map((preview, key) => (
              <div key={key} className="bg-gray-100 ps-3 py-2 mb-2">
                <p className="text-black font-extralight text-md">{preview.name}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="p-4 w-full max-w-xl">
          <button onClick={handleUpload} className="text-xl font-semibold text-white/80 py-2 border-2 w-full rounded-full active:bg-blue-700/60 transition-all duration-500">
          Upload to PhotoHub
        </button>
        </div>
      </div>
    </section>
  );
}

export default UploadForm;
