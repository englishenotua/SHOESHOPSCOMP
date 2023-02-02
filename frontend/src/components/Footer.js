import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex">
        <div className="card-name">
          <img
            alt="mastercard"
            src="https://vsememy.ru/wp-content/cache/thumb/6736aabfc_320x200.jpg"
          />
        </div>
        <div className="card-name">
          <img
            alt="visa"
            src="https://s1.iconbird.com/ico/2013/11/493/w256h2561384699878paymentcard.png"
          />
        </div>
        <div className="card-name">
          <img
            alt="paypal"
            src="https://s1.iconbird.com/ico/2013/7/392/w256h1641373272981PaypalPaymentIcon.png"
          />
        </div>
        <div className="card-name">
          <img alt="express" src="https://cdn-icons-png.flaticon.com/512/349/349228.png" />
        </div>
        <div className="card-name">
          <img
            alt="discover"
            src="https://cdn.icon-icons.com/icons2/2341/PNG/512/discover_payment_method_card_icon_142741.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
