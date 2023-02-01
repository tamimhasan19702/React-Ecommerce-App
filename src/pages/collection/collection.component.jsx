import React from 'react';
import CollectionItemComponent from '../../components/collection-item/Collection-item.component';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../components/redux/shop/shop.selector';
 

const CollectionPage = ({collection}) => (
    <div className="collection-page">
        <h2>Category Page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)