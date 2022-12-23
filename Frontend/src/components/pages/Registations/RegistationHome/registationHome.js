/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './registationHome.css';
import LogoImg from './logo.png';

class RegistationHome extends Component {
  render() {
    return (
      <div className='RHbody'>
        <div class='topnav'>
          <a class='active' href='/'>
            Home
          </a>
          <a href='/faq'>FAQ</a>
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
                style={{ width: '300px', height: '200px', marginLeft: '300px' ,marginBottom:"-60px",marginTop:"-30px"}}
              />
            </div>
          </div>
        </div>

        <section style={{ marginLeft: '-50px', marginBottom: '50px' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '10px' }}>
            <div className='section-container' style={{  marginBottom: '-50px',marginTop:"-50px" }}>
              <div className='sec-card'>
                <div className='card-box'>
                  <div className='card-content'>
                    <h3>About the application</h3>
                    <p>
                      Our purpose of this platform is to facilitate farmers in
                      one platform. Farmers have to fave inconveniences when
                      they try to sell their products and through this platform
                      by connecting farners and Customers directly that issue is
                      addressed. Likewise, farmers have to waste their time on
                      finding fertilizer. Through this platform, farmers can
                      check the availability of the fertilizers they want before
                      they go. Moreover, to make a direct connection between
                      farmers and agricultural Experts for getting supervision
                      for Farmers' problems are provided in this platform.
                    </p>
                    <a href='/Register'>New Register</a>
                  </div>
                </div>
              </div>
              <div className='sec-card'>
                <div className='card-box'>
                  <div className='card-content'>
                    <h3>About users</h3>
                    <p>
                      There are four user types. They are farmers Customers,
                      fertilizer shop owners and agricultural experts
                    </p>
                    <a href='/utype'>Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistationHome;
