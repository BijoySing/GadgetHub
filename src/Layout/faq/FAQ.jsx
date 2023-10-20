import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-4xl text-center mt-16'>
                Some Frequently Asked Questions
            </h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>What services do you offer?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>We offer a variety of services including wedding planning, birthday party coordination, anniversary event management, engagement party organization, retirement party planning, and baby shower arrangements.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>How can I contact you for booking an event?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>You can contact us through our website's contact form or by calling our dedicated hotline. We will be happy to assist you with your event planning needs.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>What are the key factors to consider when planning a successful event?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>Some key factors to consider for a successful event include budget management, venue selection, catering, entertainment, and guest list. Our experienced team can guide you through the process.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>Do you offer customized event packages?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>Yes, we provide customized event packages tailored to your specific needs and preferences. You can discuss your requirements with our team, and we will create a personalized package for you.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>What types of venues do you work with?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>We work with a wide range of venues, including banquet halls, outdoor venues, hotels, and more. Our goal is to find the perfect venue that aligns with your event vision.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    <strong>Can you help with event decorations and themes?</strong>
                </div>
                <div className="collapse-content"> 
                    <p>Absolutely! We offer comprehensive event planning services, which include event decorations and themes. Our team can create a unique and captivating theme for your event.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
