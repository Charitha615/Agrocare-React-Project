/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './utype.css';
import LogoImg from './logo.png';

class RegistationHome extends Component {
  render() {
    return (
      <div className='RHbody'>
        <div class='topnav'>
          <a  href='/'>
            Home
          </a>
          <a href='/faq'>FAQ</a>
          <a class='active' href='/utype'>User Type</a>
          <a
            href='/login'
            className='btn-login  Loginbtn'
            style={{ marginTop: '1px' }}
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
                style={{ width: '400px', height: '300px',marginLeft:"300px" }}
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
        
      </div>
    );
  }
}

export default RegistationHome;
