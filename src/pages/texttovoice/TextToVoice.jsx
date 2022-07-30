import { useSpeechSynthesis } from "react-speech-kit";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import './texttovoice.css';

export default function TextToVoice() {
  const [value, setValue] = useState("");
  const { speak, cancel } = useSpeechSynthesis();
  return (
    <div className="mainbox">
      <Navbar></Navbar>
      <div className="speech">
        <div className="group">
          <h2 className="heading">Text To Speech Converter Using React Js</h2>
        </div>
        <div className="group">
          <textarea
            rows="17"
            className="textArea"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></textarea>
        </div>
        <div className="group">
          <button onClick={() => speak({ text: value })} className="speechButton">
            Speech
          </button>
          <button onClick={cancel} className="cancelButton">
            Stop
          </button>
        </div>
      </div>
    </div>

  )
}