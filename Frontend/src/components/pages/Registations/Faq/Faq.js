/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './faq.css';
import LogoImg from './logo.png';

class RegistationHome extends Component {
  render() {
    return (
      <div className='RHbody'>
        <div class='topnav'>
          <a  href='/'>
            Home
          </a>
          <a class='active' href='/faqs'>FAQ</a>
          <a href='/utype'>User Type</a>
          <a
            href='/login'
            // className='btn-login  Loginbtn'
            // style={{ marginTop: '1px' }}
          >
            Login
          </a>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='TopRow'>
              <img
                src={LogoImg}
                className='Logoimg'
                style={{ width: '400px', height: '300px',marginLeft:"300px",marginBottom:"-60px",marginTop:"-30px" }}
              />
            </div>
            
          </div>
        </div>

        <div
          style={{
            marginLeft: '270px',
            marginRight: '320px',
            marginTop: '10px',
            marginBottom: '30px',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <p>
            Our purpose of this platform is to facilitate farmers in one
            platform. Farmers have to fave inconveniences when they try to sell
            their products and through this platform by connecting farners and
            Customers directly that issue is addressed. Likewise, farmers have
            to waste their time on finding fertilizer. Through this platform,
            farmers can check the availability of the fertilizers they want
            before they go. Moreover, to make a direct connection between
            farmers and agricultural Experts for getting supervision for
            Farmers' problems are provided in this platform.
          </p>
          <h2 style={{ paddingLeft: '24px', paddingBottom:"50px"}}>FAQ</h2>
          <div class='panel-group' id='accordion'>
            <div class='panel panel-default'>
              <div class='panel-heading'>
                <h4 class='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse1'
                  >
                    1. Can I log into the system as an expert and buy
                    agricultural products from Farmers?{' '}
                  </a>
                </h4>
              </div>
              <div id='collapse1' class='panel-collapse collapse in'>
                <div
                  class='panel-body'
                  style={{ paddingLeft: '24px', fontSize: '16px' }}
                >
                  No, you can not.{' '}
                </div>
              </div>
            </div>
            <div class='panel panel-default'>
              <div class='panel-heading'>
                <h4 class='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse2'
                  >
                    2. How do I select the suitable usertype for myself?{' '}
                  </a>
                </h4>
              </div>
              <div id='collapse2' class='panel-collapse collapse'>
                <div
                  class='panel-body'
                  style={{ paddingLeft: '24px', fontSize: '16px' }}
                >
                  You can read the user type details and choose the appropriate
                  user type.{' '}
                </div>
              </div>
            </div>
            <div class='panel panel-default'>
              <div class='panel-heading'>
                <h4 class='panel-title'>
                  <a
                    data-toggle='collapse'
                    data-parent='#accordion'
                    href='#collapse3'
                  >
                    3. Should I have to log in to the system to view question
                    and answers forum?{' '}
                  </a>
                </h4>
              </div>
              <div id='collapse3' class='panel-collapse collapse'>
                <div
                  class='panel-body'
                  style={{ paddingLeft: '24px', fontSize: '16px' }}
                >
                  Yes, you have to login to view the questions and answers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistationHome;
