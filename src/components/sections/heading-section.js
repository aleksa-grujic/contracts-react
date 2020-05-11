import React, {useEffect, useState} from 'react';
import {findHeight} from "../../utils/helpers";

export default function HeadingSection({name}) {
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setHeight(findHeight('.heading.section'));
    }, []);

    return (
        <div className='heading section' style={{height: `${height}px`}}>
            <h1>{name}</h1>
        </div>
    )
}