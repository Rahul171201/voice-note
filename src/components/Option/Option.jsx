import CardComponent from '../Card/CardComponent';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState, useEffect } from 'react';
import './option.css';

const dummyText = "This feature helps to convert your speech to real time text format which you may be able to download";

export default function Option() {
    return (
        <div className="optionbox">
            <div className='wrapper'>
                <CardGroup>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>

                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>

                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>
                    <CardComponent cardTitle="Voice To Text Converter" cardText={dummyText}>
                    </CardComponent>

                </CardGroup>
            </div>

        </div>
    )
}
