import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.png"
          />
        </div>
        <div className="card-name">
          <img alt="visa" src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" />
        </div>
        <div className="card-name">
          <img alt="paypal" src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lx.png" />
        </div>
        <div className="card-name">
          <img alt="express" src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lx.png" />
        </div>
        <div className="card-name">
          <img alt="discover" src="https://pbs.twimg.com/media/EfTZlEnWAAMn1lx.png" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
