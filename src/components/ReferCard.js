import React from "react";

const ReferCard = () => {
  return (
    
      <div className="container-fluid refer-container">
        <div className="row refer-row">
          <div className="col-xl-12 col-lg-12 mb-50">
            <div className="refer-text">
              <a
                class="btn btn-primary refund-button"
                href="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
                target="_blank"
                role="button"
              >
                CHECK REFUND STATUS
              </a>
              <h3 className="tax-text">NEED ANY HELP AT YOUR TAX SOLUTION?</h3>
              <h3>JUST DIAL <span className="contact-num">+1(302)-202_5489</span>  | <span className="contact-num">+1(345)4805609</span> (TOLL FREE)</h3>
            </div>
            <div className="payment-space">
            <i className="fab fa-cc-paypal fa-3x paypal-bg"></i>
            <i class="fab fa-cc-amex fa-3x paypal-bg"></i>
            </div>
            
          </div>
        </div>
      </div>
   
  );
};

export default ReferCard;
