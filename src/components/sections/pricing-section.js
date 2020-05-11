import React from "react";

export default function PricingSection({item, selectedContract}) {
    return (
        <div>
            <div className="section prices">
                {item.prices['old_price_recurring'][selectedContract] !== '' &&
                <p className="old-price">
                    {new Intl.NumberFormat('de-DE').format(Number(item.prices['old_price_recurring'][selectedContract]))} rsd/mes.
                </p>
                }
                <p>
                    {new Intl.NumberFormat('de-DE').format(Number(item.prices['price_recurring'][selectedContract]))} rsd/mes.
                </p>
            </div>
            {item.prices['old_price_recurring'][selectedContract] !== '' &&
            <p className="old-price-text" dangerouslySetInnerHTML={{__html: item.prices['old_price_promo_text']}}/>
            }
        </div>
    );
}