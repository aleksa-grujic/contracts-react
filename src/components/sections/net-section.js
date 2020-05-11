import React, {useEffect, useState} from "react";
import {findHeight, setAttributeString} from "../../utils/helpers";

export default function NetSection({assets, net_attributes}) {
    const [height, setHeight] = useState(null);

    useEffect(() => {
        setHeight(findHeight('.net.section'));
    }, []);

    return (
        <div className="net section" style={{height: `${height}px`}}>
            <img src={assets['net_category']} alt="Net" width="45px" height="45px"/>
            <ul>
                {net_attributes.map(attr => {
                    return <li key={attr.id}
                               dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
                })}
            </ul>
        </div>
    )
}