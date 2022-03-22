import CardComponent from '../Card/CardComponent';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import './option.css';

const card1Text = "This feature helps to convert your speech to real time text format which you may be able to download";
const card2Text = "This feature helps to convert a text file to speech (a feature useful for mute people who are physically challenged)";
const card3Text = "This feature helps to count the number of words for a given file as input in text format";
const card4Text = "This is a simulation game based on speech recognition (for physically challenged people who cant play any games)"

export default function Option() {
    return (
        <div className="optionbox">
            <div className='wrapper'>
                <CardGroup>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={card1Text}>
                    </CardComponent>

                    <CardComponent cardTitle="Text To Voice Converter" cardText={card2Text}>
                    </CardComponent>

                    <CardComponent cardTitle="Word Counter" cardText={card3Text}>
                    </CardComponent>

                    <CardComponent cardTitle="Speaking Hemon" cardText={card4Text}>
                    </CardComponent>
                   

                </CardGroup>
            </div>

        </div>
    )
}
