import React from 'react'
import './voicetotext.css';
import { TextareaAutosize } from '@mui/base';
import 'bootstrap/dist/css/bootstrap.css';
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from 'react';

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

export default function Voicetotext() {

  return (
    <div className='mainbox'>
      <h1>Voice to Text Converter</h1>
      <TextareaAutosize
        aria-label="minimum height"
        style={{ width: 1000, height: 450 }}
        className="textarea"
      />
      <div className='buttons'>
        <Button variant="success" className='startbutton'>START</Button>
        <Button variant="danger" className='stopbutton'>STOP</Button>
      </div>

    </div>
  )
}
