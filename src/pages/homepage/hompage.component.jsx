import React from 'react';
import './homepage.scss';
import MenuItem from '../../components/menu-item/menu-item.component';

function Homepage() {
  return (
    <div className='homepage'>
      <div className="directory-menu">
        
        <MenuItem title="Hats"/>
        <div className="menu-item">
            <div className="content">
                <h1 className="title">JACKETS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h1 className="title">SNEAKERS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h1 className="title">WOMANS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className="menu-item">
            <div className="content">
                <h1 className="title">MANS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage