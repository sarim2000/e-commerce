import React from 'react'
import SHOP_DATA from './shop_data'
import Collection from '../collection-preview/collection-preview.component'

class Shop extends React.Component {
    constructor(){
        super()

        this.state = 
        {
            collections: SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state
        return (
            <div className="shop-page">
                {collections.map(({id,...otherCollectionProps}) => 
                    <Collection key = {id}  {...otherCollectionProps}/>
                )}
            </div>
        )
    }
}

export default Shop