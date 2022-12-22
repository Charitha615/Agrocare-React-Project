/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './registationHome.css';
import LogoImg from './logo.png';

class RegistationHome extends Component {
  render() {
    return (
      <div className='RHbody'>
        <div className='container'>
          <div className='row'>
            <div className='TopRow'>
              <img
                src={LogoImg}
                className='Logoimg'
                style={{ width: '400px', height: '300px' }}
              />
            </div>
            <div className='TopRow'>
              <a href='/login' className='btn-login mt-5 Loginbtn'>
                Login
              </a>
            </div>
          </div>
        </div>

        <section style={{ marginLeft: '-50px' }}>
          <div style={{ backgroundColor: 'white' }}>
            <div className='section-container'>
              <div className='sec-card'>
                <div className='card-box'>
                  <div className='card-content'>
                    <h3>About the application</h3>
                    <p>
                      These example sentences are selected automatically from
                      various online news sources to reflect current usage of
                      the word 'description.' Views expressed in the examples do
                      not represent the opinion of Merriam-Webster or its
                      editors. Send us feedback.
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
                      These example sentences are selected automatically from
                      various online news sources to reflect current usage of
                      the word 'description.' Views expressed in the examples do
                      not represent the opinion of Merriam-Webster or its
                      editors. Send us feedback.
                    </p>
                    {/* <a href="/employeRegister">Register as Employer</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          style={{
            marginLeft: '270px',
            marginRight: '320px',
            marginTop: '70px',
            marginBottom: '30px',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '20px',
          }}
        >
          <h3>USER TYPE DEFINITIONS </h3>
          <h4>Farmers </h4>
          <h6>
            The user type "Farmer" is reserved for farmers. Farmers can create
            account by selecting user type "Farmer". After logging into the
            system as a farmer, Farmers can add their products for sale to the
            system. They can check the availability of the ferlizer from the
            Fertilizer section. Moreover farmers can post the questions they
            have related to the agricultural field and get answers from the
            exoerts in the agricultural field.{' '}
          </h6>
          <h4>Customer </h4>
          <h6>
            The user type "Customer" is reserved for the buyers who want to buy
            the products of farmers. Likewise, Customers can view the question
            and answers forum related to agricultural sector.{' '}
          </h6>
          <h4>Owner </h4>
          <h6>
            The user type "Owner" is reserved for shop ownera who owned products
            such as different fertilizers which are required for farners. Shop
            owners can add details about their shop and the products available
            at the moment.{' '}
          </h6>
          <h4>Expert </h4>
          <h6>
            The user type "Expert" is reserved for agricultural Experts who are
            expertized in the agricultural sector. By logging into the system as
            an agricultural expert, you can view the list of questions which are
            added by the farmers and you can provide the answers.{' '}
          </h6>
        </div>
        <div
          style={{
            marginLeft: '270px',
            marginRight: '320px',
            marginTop: '70px',
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
          <h2 style={{ paddingLeft: '24px', marginBottom: '20px' }}>FAQ</h2>
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
