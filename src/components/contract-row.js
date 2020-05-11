import React from 'react';
import ContractBox from "./contract-box";

export default function ContractRow({items, selectedContract, assets}) {

    return <div className="row">
            {items.map(item =>
                <ContractBox
                    key={item.id}
                    item={item}
                    selectedContract={selectedContract}
                    assets={assets}
                />
            )}
    </div>
}