import React from 'react';
import { Route } from 'react-router';

import CollectionOverview from '../../components/collection-overview/collectionOverview';
import CategoryPage from '../category/category.component';


const shopComponent = ({match}) => {

    return(
    <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
        )

}


export default shopComponent