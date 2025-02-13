import React, { useState,useEffect } from 'react';
import './Postad.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { saveAd,getAds, updateAd } from '../../utils/storage';
import { useParams } from 'react-router-dom';
export default function Postad() {
 
  return (
    <div className="post-ad-container">
      <div id="Post">
        <img src="pics/post1.png" width={1519} height={700} id='imgs' alt="" />
        <div id='float'>
        <Nav />
          <div className="title">
            <h1 id='h11'>Post Your Ad</h1>
            <Link to="/" className='aa'>Home ---</Link>
            <Link to='/post-ad' className='aa'>PostAd</Link>
          </div>
        </div>
      </div>

      <div id="container2">
        <form className="ad-form" >
          {/* Ad Details Section */}
          <div className='idn' style={{ borderRight: '#01005328 solid' }}>
            <div id="d1" style={{ display: 'flex' }}>
              <div className="divside"></div>
              <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%' }}>Ad Details</h4>
            </div>
            
            <div className="form-section">
              <div className="form-group">
                <input 
                  type="text" 
                  required 
                  placeholder='Project Title *'
                  name="title"
                  
                />
              </div>

              <div className="form-group">
                <select 
                  required 
                  name="category"
                >
                  <option value="">Choose category *</option>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Pets">Pets</option>
                </select>
              </div>

              <div className="price-options">
                <div className="form-group">
                  <input 
                    type="number" 
                    placeholder="Ad Your Price"
                    name="price"
                    
                  />
                </div>
                <div className="form-group">
                  <textarea 
                    rows={6} 
                    cols={60}
                    type="number" 
                    placeholder="Ad Description"
                    name="price"
                    
                  />
                </div>
                
                <div className="form-checkbox terms">
                  <input 
                    type="checkbox" 
                    id="priceOnCall"
                    name="priceOnCall"
                    
                  />
                  <label htmlFor="priceOnCall">Price On Call</label>
                </div>
              </div>

              <div className="file-upload">
                <div className="upload-area">
                    
                        <img 
                        src=""
                        alt="Preview" 
                        style={{ 
                            maxWidth: '200px', 
                            maxHeight: '150px',
                            marginBottom: '1rem'
                        }}
                        />
                    
                  <p>Drop files anywhere to upload</p>
                  <p>or</p>
                  <label htmlFor="file-upload" className="upload-button">
                    Select Files
                  </label>
                  <input 
                        type="file" 
                        id="file-upload" 
                        style={{ display: 'none' }}
                        accept="image/*"
                    />
                  <p className="file-size">Maximum size : 500 KB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className='idnn'>
            <div id="d" style={{ display: 'flex', width: '100%' }}>
              <div className="divside"></div>
              <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%', width: '100%' }}>Contact Details</h4>
            </div>

            <div className="form-section">
              <div style={{ display: 'flex' }}>      
                <div className="form-checkbox terms">
                  <input 
                    type="radio" 
                    id="sameUser" 
                    name="contactType"
                  />
                  <label htmlFor="sameUser">Same User</label>
                </div>
                <div className="form-checkbox terms ms-3">
                  <input 
                    type="radio" 
                    id="someoneElse" 
                    name="contactType"
                    value="someoneElse"
                    
                  />
                  <label htmlFor="someoneElse">Someone Else</label>
                </div>
              </div>

              <div className="name-group">
                <div className="form-group">
                  <input 
                    type="text" 
                    required 
                    placeholder='First Name *'
                    name="firstName"
                    
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    required 
                    placeholder='Last Name *'
                    name="lastName"
                    
                  />
                </div>
              </div>

              <div className="form-group">
                <input 
                  type="tel" 
                  required 
                  placeholder='Phone Number *'
                  name="phone"
                  
                />
              </div>

              <div className="form-group">
                <input 
                  type="text" 
                  placeholder='Enter Address'
                  name="address"
                  
                />
              </div>

              <div className="form-group">
                <select 
                  name="city"
                >
                  <option value="">Select City</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Fes">Fes</option>
                </select>
              </div>

              <div className="form-checkbox terms">
                <input 
                  type="checkbox" 
                  id="termsAgreement"
                  name="agreed"
                  
                />  
                <label htmlFor="termsAgreement">I agree to all Terms of Use & Posting Rules *</label>
              </div>

              <button type="submit" className="submit-button">Post Your Ad</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}