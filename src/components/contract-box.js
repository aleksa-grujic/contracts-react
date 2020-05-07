import React, {useState} from 'react';

export default function ContractBox({item, selectedContract, assets}) {
    const [isPromotion, setIsPromotion] = useState();
    console.log(item);
    let tv_attributes = item['included'].filter(attr => attr['product_category'] === 'tv');
    let net_attributes = item['included'].filter(attr => attr['product_category'] === 'net');
    return <div>
        <h1>{item.name}</h1>
        <div>
            <img src={assets['tv_category']} alt="TV" width="30px" height="30px"/>
            <ul>
                {tv_attributes.map(attr => {
                    return <li key={attr.id} dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
                })}
            </ul>
        </div>
        <div>
            <img src={assets['net_category']} alt="Net" width="30px" height="30px"/>
            {net_attributes.map(attr => {
                return <li key={attr.id} dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
            })}
        </div>
        <div>
            <img src={item['promotions'][0]['promotion_image']} alt="Net" width="30px" height="30px"/>
            <div dangerouslySetInnerHTML={{__html: item['promotions'][0]['promo_text']}}/>
        </div>
    </div>
}

const setAttributeString = (string, replaceString) => {
    string = string.replace(replaceString, `<b>${replaceString}</b>`);
    return {__html: string};
};