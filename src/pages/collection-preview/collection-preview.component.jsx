import React from 'react'
import CollectionItem from '../../component/collection-item/collection-item.component'
import './collection-preview.style.scss'
const Collection = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                .filter((item,idx) => idx < 4)
                .map(({id,...otherProps}) => <CollectionItem id = {id} {...otherProps}/>)
            }
        </div>
    </div>
)

export default Collection 