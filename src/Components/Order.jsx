import React, { useState, useEffect } from 'react';
import "./Order.css"
import { Link } from 'react-router-dom';
import 'intl-tel-input/build/css/intlTelInput.css';
import intlTelInput from 'intl-tel-input';
import { GoVerified } from "react-icons/go";
 function  Order (){
  useEffect(() => {
    let animating = false;

    function verificationForm() {
        const nextButtons = document.querySelectorAll(".next");
        const previousButtons = document.querySelectorAll(".previous");
        const fieldsets = document.querySelectorAll("fieldset");
        const progressBarItems = document.querySelectorAll("#progressbar li");

        nextButtons.forEach((nextButton, index) => {
            nextButton.addEventListener("click", function () {
                if (animating) return;
                animating = true;

                const current_fs = nextButton.parentElement;
                const next_fs = fieldsets[index + 1];

                progressBarItems[index + 1].classList.add("active");

                next_fs.style.display = "block";

                const animation = current_fs.animate([
                    { opacity: 1, transform: "scale(1)", position: "relative", left: "0%" },
                    { opacity: 0, transform: "scale(0.8)", position: "absolute", left: "50%" }
                ], {
                    duration: 800,
                    easing: "ease-in-out"
                });

                next_fs.animate([
                    { opacity: 0, transform: "scale(1.2)", left: "50%" },
                    { opacity: 1, transform: "scale(1)", left: "0%" }
                ], {
                    duration: 800,
                    easing: "ease-in-out"
                });

                animation.onfinish = function () {
                    current_fs.style.display = "none";
                    animating = false;
                };
            });
        });

        previousButtons.forEach((prevButton, index) => {
            prevButton.addEventListener("click", function () {
                if (animating) return;
                animating = true;

                const current_fs = prevButton.parentElement;
                const previous_fs = fieldsets[index];

                progressBarItems[index].classList.remove("active");

                previous_fs.style.display = "block";

                const animation = current_fs.animate([
                    { opacity: 1, left: "0%" },
                    { opacity: 0, left: "50%" }
                ], {
                    duration: 800,
                    easing: "ease-in-out"
                });

                previous_fs.animate([
                    { opacity: 0, transform: "scale(0.8)", left: "50%" },
                    { opacity: 1, transform: "scale(1)", left: "0%" }
                ], {
                    duration: 800,
                    easing: "ease-in-out"
                });

                animation.onfinish = function () {
                    current_fs.style.display = "none";
                    animating = false;
                };
            });
        });
    }

    function phoneNoselect() {
        const phoneInput = document.getElementById("phone");
        if (phoneInput && window.intlTelInput) {
            window.intlTelInput(phoneInput);
            phoneInput.intlTelInput("setNumber", "+880");
        }
    }

    function niceSelect() {
        const selects = document.querySelectorAll('.product_select');
        if (selects.length > 0) {
            selects.forEach(select => {
                // Custom implementation or initialize a select plugin here if necessary
            });
        }
    }

    verificationForm();
    phoneNoselect();
    niceSelect();
}, []);

return (
    <section className="multi_step_form">  
        <form id="msform"> 
            {/* Title */}
            <div className="tittle">
                <h2>order code 7652</h2>
                <p>In order to use this service, you have to complete this verification process</p>
            </div>
            {/* Progressbar */}
            <ul id="progressbar">
                <li className="active">Verify Phone</li>  
                <li>Upload Documents</li> 
                <li>Security Questions</li>
            </ul>
            {/* Fieldsets */}
            <fieldset>
                <h3>Setup your phone</h3>
                <h6>We will send you an SMS. Input the code to verify.</h6> 
                <div className="form-row"> 
                    <div className="form-group col-md-6">  
                        <input type="tel" id="phone" className="form-control" placeholder="+880" /> 
                    </div>  
                    <div className="form-group col-md-6"> 
                        <input type="text" className="form-control" placeholder="+8801123456789" />
                    </div> 
                </div> 
                <div className="done_text"> 
                    <a href="#" className="don_icon">< GoVerified/></a> 
                    <h6>A secret code is sent to your phone. <br />Please enter it here.</h6> 
                </div>  
                <div className="code_group"> 
                    <input type="text" className="form-control" placeholder="0" />
                    <input type="text" className="form-control" placeholder="0" />
                    <input type="text" className="form-control" placeholder="0" />
                    <input type="text" className="form-control" placeholder="0" />
                </div>  
                <button type="button" className="action-button previous_button">Back</button>
                <button type="button" className="next action-button">Confirm Order</button> 
            </fieldset>
            <fieldset>
                <h3>Verify Your Identity</h3>
                <h6>Please upload any of these documents to verify your Identity.</h6>
                <div className="passport">
                    <h4>Govt. ID card <br />PassPort <br />Driving License.</h4> 
                    <a href="#" className="don_icon">< GoVerified/></a> 
                </div>
                <div className="input-group choose-file"> 
                    <div className="custom-file ">
                        <input type="file" className="custom-file-input" id="upload" />
                        <label className="custom-file-label d-flex justify-center" htmlFor="upload"><i className="ion-android-cloud-outline"></i>Choose file</label>
                    </div>
                </div>
                <ul className="file_added">
                    <li>File Added:</li>
                    <li><a href="#"><i className="ion-paperclip"></i>national_id_card.png</a></li>
                    <li><a href="#"><i className="ion-paperclip"></i>national_id_card_back.png</a></li>
                </ul>
                <button type="button" className="action-button previous previous_button">Back</button>
                <button type="button" className="next action-button">Continue</button>  
            </fieldset>  
            <fieldset>
                <h3>Create Security Questions</h3>
                <h6>Please update your account with security questions</h6> 
                <div className="form-group"> 
                    <select className="product_select">
                        <option data-display="1. Choose A Question">1. Choose A Question</option> 
                        <option>2. Choose A Question</option>
                        <option>3. Choose A Question</option> 
                    </select>
                </div> 
                <div className="form-group fg_2"> 
                    <input type="text" className="form-control" placeholder="Answer here:" />
                </div> 
                <div className="form-group"> 
                    <select className="product_select">
                        <option data-display="1. Choose A Question">1. Choose A Question</option> 
                        <option>2. Choose A Question</option>
                        <option>3. Choose A Question</option> 
                    </select>
                </div> 
                <div className="form-group fg_3"> 
                    <input type="text" className="form-control" placeholder="Answer here:" />
                </div> 
                <button type="button" className="action-button previous previous_button">Back</button> 
                <Link to="#" className="action-button">Finish</Link>

            </fieldset>  
        </form>  
    </section>
)
};
export default Order;