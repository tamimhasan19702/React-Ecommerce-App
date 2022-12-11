import React, { Component } from 'react';
import { shop_Data } from './shop.data';
import PreviewCollection from '../../components/preview-collection/Preview-collection.compotent';

class shopComponent extends Component{

    constructor(props){
super(props);


this.state = {
    collections: shop_Data
}

}

render(){
    const { collections } = this.state;

    return(<div className='shop-page'>
          {
            collections
            .map(({id, ...otherComponents }) => (
            <PreviewCollection 
            key={id} 
            {...otherComponents}/>
            ))
          }
        </div>);
}

}

export default shopComponent