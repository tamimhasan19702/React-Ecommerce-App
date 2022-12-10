import React ,{Component} from 'react';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
constructor(){
    super();

  this.state = {
    section: [
    {
        title:'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1
    },
    {
        title:'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2
    },
    {
        title:'Sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3
    },
    {
        title:'womans',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        id: 1
    },
    {
        title:'mans',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        id: 1
    },
]
  }
}

render(){
    return(
        <div className="directory-menu">
        {
            this.state.section.map(({title,imageUrl, id}) => (
                <MenuItem 
                key={id}
                title={title}
                />
            ))
        }
        </div>
    )
}



}

export default Directory
