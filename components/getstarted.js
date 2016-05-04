var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Getstarted = React.createClass({
  render: function() {
    return (
      <div className="getstarted">
        <div id="signUp" className="text-center">
          	<div id="getStart" className="formMessageArea">
            	<h2>Hi, Let’s Set you up</h2>
            	<p>Follow the following screens<br /> to quickly set you up.</p>
            	<input type="submit" value="Get started" className="button button-white" />
          	</div>
          	<div id="setTwitter" className="setTwitter">
	              <a href="#" className="backArrow"><i className="fa fa-chevron-left"></i></a>
	              <h2>Set up Twitter Digits</h2>
	              <div className="formGroup">
	                <div className="group">      
	                  <input className="inputMaterial" type="text" required />
	                  <span className="highlight"></span>
	                  <span className="bar"></span>
	                  <label>Name</label>
	                </div>
	                <div className="group">      
	                  <input className="inputMaterial" type="text" required />
	                  <span className="highlight"></span>
	                  <span className="bar"></span>
	                  <label>Mobile</label>
	                </div>
	              </div>
	              <input type="submit" className="button button-white" value="Send code" />
            </div>
            <div id="verifyNumber" className="verifyNumber">
	            <a href="#" className="backArrow"><i className="fa fa-chevron-left"></i></a>
	            <h2>Verify your mobile number</h2>
	            <div className="formGroup">
	              <div className="group">      
	                <input className="inputMaterial" type="password" maxLength="6" required />
	                <span className="highlight"></span>
	                <span className="bar"></span>
	                <label>Enter 6 digit code</label>
	              </div>
	            </div>
	            <input type="submit" className="button button-white" value="Create account" />
	          </div>
	          <div id="confirmation" className="formMessageArea">
		          <h2>Thank you for completing the set up</h2>
		          <p>Your now just a button away from borrowing your stuff</p>
		          <a href="#" className="button button-white">Discover</a>
		        </div>
        </div>
        <Link to="/stream">Breakfast</Link>
      </div>
    );
  }
});

module.exports = Getstarted;
