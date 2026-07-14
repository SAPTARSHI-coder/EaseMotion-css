import React,{useState,useRef}from "react";
import "./CheckoutSummaryAccordion.css";

const CheckoutSummaryAccordion = () => {
    const [isOpen,setIsOpen]=useState(false);
    const contentRef=useRef(null);

    return (
        <div className="checkout-container">
            <div className="checkout-header" onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <h3>Order Summary</h3>
                    <p>3 items</p>
                </div>
                <span className={`arrow ${isOpen ? "rotated" : ""}`}></span>
            </div>
            <div className="accordion-content" ref={contentRef} style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px" }}>
                <div className="content">
                    <div className="row">
                        <span>Subtotal</span>
                        <span>$120.00</span>
                    </div>
                    <div className="row">
                        <span>Shipping</span>
                        <span>$10.00</span>
                    </div>
                    <div className="row">
                        <span>Tax</span>
                        <span>$8.00</span>
                    </div>
                    <div className="row_total">
                        <span>Total</span>
                        <span>$138.00</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CheckoutSummaryAccordion;