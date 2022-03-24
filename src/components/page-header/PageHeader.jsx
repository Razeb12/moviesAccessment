import React from 'react';

import './page-header.scss';

import bg from '../../assets/hero.png';

const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
        </div>
    );
}


export default PageHeader;
