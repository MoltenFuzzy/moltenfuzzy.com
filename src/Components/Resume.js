import React, { useState } from "react"
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import resumePDF from "../pdfs/resume.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

const Resume = () => {
  function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(
      ".react-pdf__Page__textContent"
    )
    textLayers.forEach(layer => {
      const { style } = layer
      style.top = "0"
      style.left = "0"
      style.transform = ""
    })
  }

  return (
    <div className="section" id="resume">
      <div className="container">
        <div className="resume-container">
          <h1>Resume</h1>
          <Document file={resumePDF}>
            <Page height="1500" pageNumber={1} onLoadSuccess={removeTextLayerOffset} onLoadError={console.error} />
          </Document>
        </div>
      </div>
    </div>
  )
}

export default Resume
