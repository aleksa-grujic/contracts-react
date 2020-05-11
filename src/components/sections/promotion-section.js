import React from "react";

export default function PromotionSection({promotion}) {
    return (
        <div className="promo-section">
            <img src={promotion['promotion_image']} alt="Net"/>
            <p dangerouslySetInnerHTML={{__html: promotion['promo_text']}}/>
        </div>
    )
}