import React, { Component } from 'react';
import { shop_Data } from '../../components/redux/shop/shop.data';
import PreviewCollection from '../../components/preview-collection/Preview-collection.compotent';
import { selectCollections } from '../../components/redux/shop/shop.selector';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';



const shopComponent = ({collections}) => {

    return(
    <div className='shop-page'>
          {
            collections
            .map(({id, ...otherComponents }) => (
            <PreviewCollection 
            key={id} 
            {...otherComponents}/>
            ))
          }
        </div>
        )

}


const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})


export default connect(mapStateToProps)(shopComponent)