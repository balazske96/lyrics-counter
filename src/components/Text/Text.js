import React, { useState, useEffect } from 'react';
import './Text.scss';
import { Input } from 'antd';
import {AppContext} from '../../context/AppContext';



export default function Text() {

    const {repetitionWordDictionary, setRepetitionDictionary} = React.useContext(AppContext)

    const { TextArea } = Input;

    const searchForRepetition = event => {
        event.preventDefault();
        let temporaryLibrary = {}
        let lyricsArray = event.target.value.trim().split(/[\n, ]/);
        lyricsArray.forEach(word => {
            if (temporaryLibrary[word] != undefined) {

                temporaryLibrary[word] += 1;
            } else {
                temporaryLibrary[word] = 1;
            }
            setRepetitionDictionary(temporaryLibrary);
        });
    }

    useEffect(() => {
        console.log(repetitionWordDictionary);
    }, [repetitionWordDictionary])
 
    return (
        <section className="lyrics-counter__input">
            <label>Insert your lyrics here:</label>
            <TextArea allowClear rows={5} onChange={searchForRepetition} />
        </section>
    )
}