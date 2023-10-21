import React from 'react';

const gadgetData = [
    {
        title: 'Latest Smartphone Release: The Gadget Pro X',
        date: 'October 15, 2023',
        author: 'John Doe',
        image: 'https://i.ibb.co/mNn11c4/1.jpg',
        content: `
            Introducing the Gadget Pro X, the latest addition to our smartphone lineup.
            Packed with cutting-edge features, this device is a game-changer in the world of technology.
            Explore the key specifications and what sets it apart from the competition.
        `,
    },
    {
        title: 'Revolutionary SmartPhones: Gadget  Series 5',
        date: 'October 28, 2023',
        author: 'Jane Smith',
        image: 'https://images.samsung.com/bd/smartphones/galaxy-s22-ultra/images/galaxy-s22-ultra_highlights_kv_img.jpg',
        content: `
            Get ready to experience a whole new level of smartwatches with the Gadget Watch Series 5.
            From fitness tracking to seamless connectivity, discover how it enhances your daily life.
        `,
    },
    {
        title: 'Tech Enthusiast\'s Dream: Gadget Hub VR Glasses',
        date: 'November 10, 2023',
        author: 'Mike Johnson',
        image: 'https://www.durberbd.com/wp-content/uploads/2022/01/SAMSUNG-EHS61-in-ear-Earphone-Wired-with-Microphone-for-Samsung-S5830-S7562-for-xiaomi-earpiece-for.jpg_Q90.jpg_.webp',
        content: `
            Immerse yourself in the world of virtual reality with our latest Gadget Hub VR Glasses.
            This groundbreaking product takes entertainment and gaming to the next level.
        `,
    },
    {
        title: 'The Ultimate Laptop: GadgetBook Pro 13',
        date: 'November 23, 2023',
        author: 'Emily Davis',
        image: 'https://i.ibb.co/3m1bt7G/y.jpg',
        content: `
            Meet the GadgetBook Pro 13, a powerful laptop that combines performance and portability.
            Discover its sleek design, high-resolution display, and advanced features.
        `,
    },
    {
        title: 'Stay Fit with GadgetFit 3: Fitness Tracker',
        date: 'December 5, 2023',
        author: 'David Brown',
        image: 'https://i.etsystatic.com/32684893/r/il/136f15/3827570078/il_fullxfull.3827570078_nzbv.jpg',
        content: `
            Achieve your fitness goals with the GadgetFit 3 Fitness Tracker. Track your activities,
            monitor your health, and stay motivated with this versatile wearable device.
        `,
    },
    {
        title: 'Smart Home Revolution: GadgetHome Automation',
        date: 'December 18, 2023',
        author: 'Sarah Wilson',
        image: 'https://m.media-amazon.com/images/I/71LRY1j6UHL._AC_UF1000,1000_QL80_.jpg',
        content: `
            Transform your home into a smart and connected space with GadgetHome Automation.
            Control lights, security, and more with your smartphone or voice commands.
        `,
    },
    {
        title: 'Capture Memories with GadgetCam X: DSLR Camera',
        date: 'January 8, 2024',
        author: 'Mark Anderson',
        image: 'https://i.ibb.co/mNn11c4/1.jpg',
        content: `
            Elevate your photography with the GadgetCam X DSLR Camera. Explore its features,
            lens options, and capture stunning photos and videos.
        `,
    },
    {
        title: 'Gaming Excellence: GadgetConsole Pro',
        date: 'January 20, 2024',
        author: 'Sophia Lee',
        image: 'https://i.ibb.co/mNn11c4/1.jpg',
        content: `
            Experience gaming like never before with the GadgetConsole Pro. Enjoy realistic graphics,
            fast performance, and a wide range of gaming titles.
        `,
    },
    {
        title: 'GadgetHub Pro: Your Tech Companion',
        date: 'February 12, 2024',
        author: 'Chris Martin',
        image: 'https://cdn3.vox-cdn.com/uploads/chorus_asset/file/3459516/vs02-23_1525cxs.0.png',
        content: `
            Explore the GadgetHub Pro, a hub of all things tech. Stay updated on the latest gadgets,
            reviews, and tech news with our comprehensive platform.
        `,
    },
    {
        title: 'Audio Revolution: GadgetSound Pro Earbuds',
        date: 'February 26, 2024',
        author: 'Lucy Turner',
        image: 'https://i.ibb.co/NT9yPtV/z.jpg',
        content: `
            Immerse yourself in music with the GadgetSound Pro Earbuds. Enjoy high-quality sound,
            noise cancellation, and a comfortable fit for a premium audio experience.
        `,
    },
];

const Blogs = () => {
    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-semibold mb-6">Latest from Gadget Hub</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gadgetData.map((post, index) => (
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden" key={index}>
                        <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                            <p className="text-gray-600 text-sm mb-2">
                                Posted on <span className="font-medium">{post.date}</span> by{' '}
                                <span className="font-medium">{post.author}</span>
                            </p>
                            <p className="text-gray-700 text-sm">
                                {post.content.substring(0, 100)}... <a href="#">Read more</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
