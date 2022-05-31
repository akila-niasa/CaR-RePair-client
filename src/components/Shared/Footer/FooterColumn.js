import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = (props) => {
    return (
        <div className="col-md-3 col-lg-3">
            <div >
            <h6 className="fw-bold" style={{color:"#ffffff"}}>{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-3">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-danger text-decoration-none">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
        </div>
    );
};

export default FooterColumn;