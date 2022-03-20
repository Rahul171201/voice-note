import { useRef, useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./voicetotext.css";
import microPhoneIcon from "./microphone.png";
import { TextareaAutosize } from '@mui/base';
import 'bootstrap/dist/css/bootstrap.css';
import Button from "react-bootstrap/Button";

function VoiceToText() {

  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  const [textSpeech, setTextSpeech] = useState("rahul");

  let data = "";

   // saving the text from the div
   useEffect(() => {
     if(transcript){
      setTextSpeech(document.getElementsByClassName('resulttext').value);
     }
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const handleListing = () => {
    setIsListening(true);
    // setTextSpeech({transcript});
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
    // console.log({textSpeech});
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  console.log(textSpeech);
  

  
  return (
    <div className='mainbox'>
      <h1 className="headername">Voice to Text Converter</h1>
      <div className="microphone-status">
        {isListening ? "Listening........." : "Click to start Listening"}
      </div>
      <Button variant="primary" className="resetbutton" onClick={handleReset}>RESET</Button>
      <div className="resulttext">{transcript}</div>
      <div className='buttons'>
        <Button variant="success" className='startbutton' ref={microphoneRef} onClick={handleListing}>START</Button>
        <Button variant="danger" className='stopbutton' onClick={stopHandle}>STOP</Button>
      </div>
    </div>
  );
}
export default VoiceToText;