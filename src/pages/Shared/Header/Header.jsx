import React from 'react';
import logo from '../../../../public/assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">
                    <small>Journalism Without Fear or Favour</small>
                </p>
            </div>
        </div>
    );
};

export default Header;