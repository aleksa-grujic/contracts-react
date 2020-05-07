import React from 'react';

export default function ConctractSelect({options, selectedOption, setSelectedOption}) {

    return <div>
        <select value={selectedOption} onChange={(event => {setSelectedOption(event.target.value)})}>
            {options['contract_length_options'].map(option =>
                <option key={option} value={option}>{option}</option>
            )}
        </select>
    </div>
}