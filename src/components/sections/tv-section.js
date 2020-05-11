import React, {useEffect, useState} from "react";
import {findHeight, setAttributeString} from "../../utils/helpers";

export default function TvSection({assets, tv_attributes}) {
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setHeight(findHeight('.tv.section'));
    }, []);

    return (
        <div className="tv section" style={{height: `${height}px`}}>
            <img src={assets['tv_category']} alt="TV" width="45px" height="45px"/>
            <ul>
                {tv_attributes.map(attr => {
                    return <li key={attr.id}
                               dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
                })}
            </ul>
        </div>
    )
}