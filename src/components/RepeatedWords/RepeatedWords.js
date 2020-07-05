import React from 'react';
import { Tag } from 'antd';
import './RepeatedWords.scss';
import { AppContext } from '../../context/AppContext';

export default function RepeatedWords() {

    const {
        repetitionWordDictionary,
        setRepetitionDictionary,
        exceptions,
        setExceptions
    } = React.useContext(AppContext);

    const addToExceptions = (word) => {
        setExceptions(prevState => {
            if (!prevState.includes(word)) {
                prevState.push(word)
            }
            return prevState;
        })
    }

    return (
        <section className="lyrics-counter__repeated-words">

            {
                Object.keys(repetitionWordDictionary).map((word, index) => {
                    if (repetitionWordDictionary[word] === 2 && !exceptions.includes(word)) {
                        return <Tag closable onClose={() => addToExceptions(word)} color="#9b870c">{word}</Tag>
                    } else if (repetitionWordDictionary[word] > 2 && !exceptions.includes(word)) {
                        return <Tag closable onClose={() => addToExceptions(word)} color="#cd201f">{word}</Tag>
                    }
                })
            }
        </section>
    )
}   