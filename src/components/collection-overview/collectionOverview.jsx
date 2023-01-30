import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collectionOverview.style.scss'
import PreviewCollection from '../preview-collection/Preview-collection.compotent';
import { selectCollections } from '../redux/shop/shop.selector';


const CollectionOverview = ({collections}) => (
 <div className='collections-overview'>
     {
        collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))
     }
 </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  })


  export default connect(mapStateToProps)(CollectionOverview)