import './wordcounter.css';
import Navbar from '../../components/Navbar/Navbar';
import { useState } from 'react';

export default function WordCounter() {

    const [text, setText] = useState("");
    const [finalWords, setFinalWords] = useState([]);

    const splitString = (str) => {
        let prev = 0;
        const arr = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '.' || str[i] == ',' || str[i] == ' ' || str[i] == '\n' || str[i] == '\t') {
                arr.push(str.substr(prev, i - prev));
                prev = i + 1;
            }
        }
        return arr;
    }

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (e) => {
                let str = e.target.result;  
                // let finalWords = str.split(" ");
                setText(e.target.result);
                setFinalWords(splitString(str));
            }
        }
    }

    return (
        <div className='wordcounterbox'>
            <Navbar></Navbar>
            <div className='mainPage'>
                <div className='leftBox'>
                    {text}
                </div>
                <div className='rightBox'>
                    <input type="file" name="wordFile" onChange={uploadFile} ></input>
                  
                    <p className='count'>The Total Number Of Words Are : {finalWords.length}</p>
                </div>
            </div>
        </div>
    )
}
