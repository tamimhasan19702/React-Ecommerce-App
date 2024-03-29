import React from 'react';
import { Route } from 'react-router';

import CollectionOverview from '../../components/collection-overview/collectionOverview';
import CollectionPage from '../collection/collection.component';

const shopComponent = ({match}) => {

    return(
    <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionOverview} />
          <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
        )

}


export default shopComponent