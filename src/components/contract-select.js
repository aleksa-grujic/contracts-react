import React, {useState} from 'react';

export default function ConctractSelect({options, selectedOption, setSelectedOption}) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="select-row">
            <div className="select-container">
                <div className={isActive ? "select active" : "select"} onClick={() => {
                    setIsActive(!isActive)
                }}>
                    <span>{selectedOption}</span>
                    <span className="select-arrow"> </span>
                </div>
                {isActive &&
                <div className="options">
                    {options['contract_length_options'].map(option =>
                        <div
                            className="option"
                            key={option}
                            onClick={() => {
                                setSelectedOption(option)
                                setIsActive(false);
                            }}
                        >{option}</div>
                    )}
                </div>
                }
            </div>
        </div>
    )
}