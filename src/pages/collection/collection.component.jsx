import React from 'react';
import CollectionItemComponent from '../../components/collection-item/Collection-item.component';
import './collection.styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../components/redux/shop/shop.selector';
 

const CollectionPage = ({collection}) => {

   const { title,items} = collection;

    return(
        <div className="collection-page">
<h2 className='title'>{title}</h2>
<div className="items">
    {
        items.map(item => (
            <CollectionItemComponent key={item.id} item={item}/>
        ))
    }
</div>
        </div>
    );
};
    

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)