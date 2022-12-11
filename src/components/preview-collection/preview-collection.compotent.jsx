import React from 'react';
import './preview-collection.style.scss';
import CollectionItem from '../collection-item/Collection-item.component';

function PreviewCollection({ title , items}) {
  return (
    <div className='collection-preview'>
     <h1 className='title'>{title.toUpperCase()}</h1>
     <div className="preview">
        {
            items
            .filter((items,index) => index < 4)
            .map(({id, ...itemProps}) => (
            <CollectionItem key={id} {...itemProps}/>
            ))
        }
     </div>
    </div>
  )
}

export default PreviewCollection
