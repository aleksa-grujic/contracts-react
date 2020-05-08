import React from 'react';

export default function ContractBox({item, selectedContract, assets}) {
    let tv_attributes = item['included'].filter(attr => attr['product_category'] === 'tv');
    let net_attributes = item['included'].filter(attr => attr['product_category'] === 'net');

    return (
        <div>
            <h1>{item.name}</h1>
            <div>
                <img src={assets['tv_category']} alt="TV" width="30px" height="30px"/>
                <ul>
                    {tv_attributes.map(attr => {
                        return <li key={attr.id}
                                   dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
                    })}
                </ul>
            </div>
            <div>
                <img src={assets['net_category']} alt="Net" width="30px" height="30px"/>
                {net_attributes.map(attr => {
                    return <li key={attr.id}
                               dangerouslySetInnerHTML={setAttributeString(attr['long_name'], attr.attributes['attribute_value'])}/>
                })}
            </div>
            {item.promotions.map(promotion =>
                promotion['discount_variations'].includes(selectedContract) && (
                    <div key={promotion.id}>
                        <img src={promotion['promotion_image']} alt="Net" width="30px" height="30px"/>
                        <div dangerouslySetInnerHTML={{__html: promotion['promo_text']}}/>
                    </div>
                )
            )}
            <div>
                {item.prices['old_price_recurring'][selectedContract] !== '' &&
                <s>
                    {Number(item.prices['old_price_recurring'][selectedContract]).toFixed(0)} rsd/mes.
                </s>
                }
                <p>
                    {Number(item.prices['price_recurring'][selectedContract]).toFixed(0)} rsd/mes.
                </p>
                {item.prices['old_price_recurring'][selectedContract] !== '' &&
                <p dangerouslySetInnerHTML={{__html: item.prices['old_price_promo_text']}}/>
                }
            </div>
        </div>
    )
}

const setAttributeString = (string, replaceString) => {
    string = string.replace(replaceString, `<b>${replaceString}</b>`);
    return {__html: string};
};