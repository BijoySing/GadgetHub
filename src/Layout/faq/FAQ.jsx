import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-4xl  font-bold text-center mt-16 mb-10'>
                Some Frequently Asked Questions for<br></br> Gadgets Hub
            </h1>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title text-xl font-medium mb-4">
                    <strong>What products do you offer at Gadgets Hub?</strong>
                </div>
                <div className="collapse-content mb-4"> 
                    <p>Gadgets Hub offers a wide range of gadgets, including smartphones, laptops, smartwatches, headphones, and more.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium mb-4">
                    <strong>How can I place an order for gadgets on Gadgets Hub?</strong>
                </div>
                <div className="collapse-content mb-4"> 
                    <p>You can easily place an order by browsing our product catalog and adding items to your cart. Once you're ready, proceed to checkout and follow the simple steps to complete your purchase.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium mb-4">
                    <strong>What payment methods do you accept at Gadgets Hub?</strong>
                </div>
                <div className="collapse-content mb-4"> 
                    <p>We accept various payment methods, including credit cards, debit cards, PayPal, and other online payment options for your convenience.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium mb-4">
                    <strong>Is there a return or exchange policy at Gadgets Hub?</strong>
                </div>
                <div className="collapse-content mb-4"> 
                    <p>Yes, we have a hassle-free return and exchange policy. If you're not satisfied with your purchase, you can initiate a return or exchange within 30 days of receiving your order.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 mb-4">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium mb-4">
                    <strong>Do you provide warranty for your gadgets?</strong>
                </div>
                <div className="collapse-content mb-4"> 
                    <p>Certainly! All gadgets purchased from Gadgets Hub come with a manufacturer's warranty. You can find warranty details on each product page.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
