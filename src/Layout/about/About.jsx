import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-us section max-w-screen-xl mx-auto my-10 lg:my-32">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-colorHead text-xl lg:text-5xl font-extrabold mb-6">
                            About GadgetHub
                        </h2>
                        <p className="px-5 lg:px-0 text-center font-medium text-colorPara leading-6 max-w-xl">
                            At GadgetHub, we are passionate about bringing the latest and greatest gadgets to your fingertips.
                            With a focus on innovation and quality, we've been your trusted source for cutting-edge technology.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                        <div className="space-y-6">
                            <h3 className="text-colorHead text-2xl font-extrabold">Our Mission</h3>
                            <p className="text-colorPara leading-6">
                                Our mission is to provide tech enthusiasts with access to the most advanced gadgets and
                                electronics. We are dedicated to delivering top-notch customer service and making your tech
                                dreams a reality.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-colorHead text-2xl font-extrabold">What Sets Us Apart</h3>
                            <p className="text-colorPara leading-6">
                                What sets us apart is our commitment to quality and innovation. Our team of tech experts
                                carefully curate our product selection to ensure you get the best gadgets. We believe in
                                staying ahead of the tech curve.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-team section bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-center text-colorHead text-3xl lg:text-4xl font-extrabold mb-6">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add team member cards here */}
                        <div className="team-member-card bg-white rounded-lg shadow-lg p-6">
                            <img src="https://i.pinimg.com/originals/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">John Doe</h3>
                            <p className="text-colorPara text-sm">CEO</p>
                        </div>
                        <div className="team-member-card bg-white rounded-lg shadow-lg p-6">
                            <img src="https://1.bp.blogspot.com/-j-ERWuBRTuA/YTY_6WB8QZI/AAAAAAAADig/BGAaNkvSSrESO6039J0YxMC_IfgohWZIwCLcBGAsYHQ/s570/Shazim%2Buddin%2Bpp%2Bimage%2Bwith%2Bstroke.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">Jane Smith</h3>
                            <p className="text-colorPara text-sm">Product Manager</p>
                        </div>
                        <div className="team-member-card bg-white  shadow-lg p-6">
                            <img src="https://i.pinimg.com/originals/ed/18/91/ed189191dc22169f0e6786a85f068616.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">Michael Johnson</h3>
                            <p className="text-colorPara text-sm">Customer Support</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials section max-w-screen-xl mx-auto my-12 lg:my-">
                <div className="container mx-auto">
                    <h2 className="text-center text-colorHead text-3xl lg:text-4xl font-extrabold mb-6">
                        What Our Customers Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add customer testimonials here */}
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "I love shopping at GadgetHub. They always have the latest tech products, and their customer
                                service is fantastic!"
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">Emily</h3>
                                <p className="text-colorPara text-sm">Satisfied Customer</p>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "GadgetHub is my go-to place for tech gear. Their product range is incredible, and I trust their
                                recommendations."
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">David</h3>
                                <p className="text-colorPara text-sm">Tech Enthusiast</p>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "I've had a great experience with GadgetHub. Their team is knowledgeable, and they go the extra mile
                                to help you find the right gadgets."
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">Sarah</h3>
                                <p className="text-colorPara text-sm">Happy Shopper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
