import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import "./musicUploadForm.css";

const MusicUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState("");
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [trackNumber, setTrackNumber] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = (event) => {
    event.preventDefault();

    if (selectedFile && songName && artistName && trackNumber) {
      setIsUploading(true);

      // simulate a delay to represent the upload process
      setTimeout(() => {
        setIsUploading(false);

        // pass the uploaded file and song details
        onUpload({
          file: selectedFile,
          songName,
          artistName,
          trackNumber,
        });

        // clear the input fields
        setSongName("");
        setArtistName("");
        setTrackNumber("");
        setSelectedFile("");
      }, 3000); // timeout
    }
  };

  return (
    <form className="music-upload-form" onSubmit={handleUpload}>
      <h2 className="form-header">Upload Music</h2>
      <label htmlFor="uploadSong">Upload Song:</label>
      <input
        id="uploadSong"
        className="uploadSong"
        type="file"
        accept=".mp3, .wav"
        value={selectedFile}
        aria-describedby="fileInputDescription"
        onChange={(e) => setSelectedFile(e.target.value)}
      />
      <label htmlFor="songName">Song Name:</label>
      <input
        id="songName"
        aria-labelledby="songNameLabel"
        aria-required="true"
        type="text"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />
      <label htmlFor="artistName">Artist Name: </label>
      <input
        id="artistName"
        aria-labelledby="artistName"
        aria-required="true"
        type="text"
        value={artistName}
        onChange={(e) => setArtistName(e.target.value)}
      />
      <label htmlFor="trackNumber">Track Number:</label>
      <input
        id="trackNumber"
        aria-labelledby="trackNumber"
        aria-required="true"
        type="number"
        value={trackNumber}
        onChange={(e) => setTrackNumber(e.target.value)}
      />
      <button
        className="upload"
        type="submit"
        disabled={
          !selectedFile ||
          !songName ||
          !artistName ||
          !trackNumber ||
          isUploading
        }
      >
        Upload
      </button>
      {isUploading && (
        <LinearProgress aria-live="assertive" className="progress" />
      )}
    </form>
  );
};

export default MusicUploadForm;
