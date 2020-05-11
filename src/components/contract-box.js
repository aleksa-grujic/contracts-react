import React from 'react';
import TvSection from "./sections/tv-section";
import HeadingSection from "./sections/heading-section";
import NetSection from "./sections/net-section";
import PromotionSection from "./sections/promotion-section";
import PricingSection from "./sections/pricing-section";

export default function ContractBox({item, selectedContract, assets}) {
    let tv_attributes = item['included'].filter(attr => attr['product_category'] === 'tv');
    let net_attributes = item['included'].filter(attr => attr['product_category'] === 'net');
    return (
        <div className={item['is_featured'] === 1 ? "box featured" : "box"}>
            {item['is_featured'] === 1 &&
                <>
                    <div className="recommend-section">
                        Preporučujemo
                    </div>
                    <hr/>
                </>
            }
            <HeadingSection
                name={item.name}
            />
            <hr/>
            <TvSection
                assets={assets}
                tv_attributes={tv_attributes}
            />
            <hr/>
            <NetSection
                assets={assets}
                net_attributes={net_attributes}
            />
            {item.promotions.map(promotion =>
                promotion['discount_variations'].includes(selectedContract) && (
                   <PromotionSection
                       promotion={promotion}
                       key={promotion.id}
                   />
                )
            )}
            <hr/>
                <PricingSection
                    item={item}
                    selectedContract={selectedContract}
                />
            <button className="order-button">Naručite</button>
        </div>
    )
}