import React, { useState } from "react";
import "./style.css";

function QrCodeCard() {
  const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

  const [url, setUrl] = useState("");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const generateQR = () => {
    if (url.trim() !== "") {
      setGeneratedUrl(api + encodeURIComponent(url));
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>QR Code</h2>
      </div>

      {generatedUrl ? (
        <div className="img-card">
          <img src={generatedUrl} alt="QR Code" />
        </div>
      ) : (
        <h3>Generator</h3>
      )}

      <div className="card-footer">
        <input
          type="text"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          placeholder="Enter URL"
        />
        <button onClick={generateQR}>Generate</button>
      </div>
    </div>
  );
}

export default QrCodeCard;
