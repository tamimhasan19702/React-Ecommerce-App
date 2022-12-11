import React, { Component } from 'react';
import { shop_Data } from './shop.data';

class shopComponent extends Component{

    constructor(props){
super(props);


this.state = {
    collections: shop_Data
}

}

render(){
    return(
        <div>Shop Page</div>
    )
}


}

export default shopComponent