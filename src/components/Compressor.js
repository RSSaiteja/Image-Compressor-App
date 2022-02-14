// import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import imageCompression from "browser-image-compression";

export default function Compressor() {
  const [originalImage, setOriginalImage] = useState("");
  const [originalImageFile, setOriginalImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const handle = (event) => {
    const imageFile = event.target.files[0]; //
    setOriginalImage(imageFile);
    setOriginalImageFile(URL.createObjectURL(imageFile)); //creates the url of the particular image
    setFileName(imageFile.name);
  };

  const imageStyle = {
    width: "416px",
    height: "416px",
    background: "50% 50% no-repeat",
    // backgroundSize: "cover",
  };

  const linkStyle = {
      textDecoration: "none",
      color: "white"
  }

  const handleCompressImage = (event) => {
    event.preventDefault(); //any kind of default action should not be taken

    const options = {
      maxSizeMB: 1,
    };
    if (options.maxSizeMB >= originalImage / 1024) {
      alert("Image is too small!!!");
      return 0;
    }

    let output;
    imageCompression(originalImage, options).then((x) => {
      output = x;
      const downloadLink = URL.createObjectURL(output);
      setCompressedImage(downloadLink);
    });
  };

  


  return (
    <Container>
      <Row>
        <Col className="mx-auto my-5">
          {originalImageFile ? (
            <img src={originalImageFile} style={imageStyle} alt="original "></img>
          ) : (
            <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="original "/>
          )}
        </Col>
        <Col className="mx-auto my-5 ">
          {compressedImage ? (
            <img src={compressedImage} style={imageStyle} alt="compressed "></img>
          ) : (
            <img src="https://media.istockphoto.com/vectors/image-preview-icon-picture-placeholder-for-website-or-uiux-design-vector-id1222357475?k=20&m=1222357475&s=170667a&w=0&h=YGycIDbBRAWkZaSvdyUFvotdGfnKhkutJhMOZtIoUKY=" alt="compressed "/>
          )}
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <input
            type="file"
            accept="image/*"
            className="mt-10 btn btn-light w-10"
            //w-10
            onChange={(event) => handle(event)}
          />
          {originalImageFile && (
            <button
              type="button"
              class="btn btn-primary mx-3"
              onClick={(event) => {
                handleCompressImage(event);
              }}
            >
              Compress Image
            </button>
          )}
          {compressedImage && (
            <button type="button" class="btn btn-primary my-3" >
              <a href={compressedImage} download={fileName} style={linkStyle}>Download Image</a>
               
            </button>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
