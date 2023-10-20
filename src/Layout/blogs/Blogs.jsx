import React from 'react';

const blogPosts = [
    {
        title: 'Planning the Perfect Wedding: A Step-by-Step Guide',
        date: 'November 10, 2023',
        author: 'Jane Smith',
        image: 'https://i.ibb.co/L8w324v/wedding.jpg',
        content: `
            Planning a wedding can be both exciting and overwhelming. From choosing the perfect venue to
            selecting the ideal wedding dress, this step-by-step guide will help you navigate the journey
            to your dream wedding. Ensure your special day is a memorable one with expert tips and insights.
        `,
    },
    {
        title: 'Throwing a Memorable Birthday Party for Kids',
        date: 'December 5, 2023',
        author: 'Michael Johnson',
        image: 'https://i.ibb.co/F3CYDzF/birthday.jpg',
        content: `
            Organizing a birthday party for your child? Discover creative themes, games, and decoration ideas
            to make your kid's birthday celebration unforgettable. From princess parties to superhero adventures,
            we've got you covered with 100-word magic!
        `,
    },
    {
        title: 'Celebrating Love: Planning Your Anniversary Bash',
        date: 'January 20, 2024',
        author: 'Emily Davis',
        image: 'https://i.ibb.co/1rD2kBg/anneversary.jpg',
        content: `
            Whether it's your first anniversary or a milestone celebration, make it special with our tips on
            planning the perfect anniversary party. From romantic settings to meaningful gifts, it's all here
            in a concise 100 words.
        `,
    },
    {
        title: 'Engagement Party Ideas for the Newly Engaged',
        date: 'February 15, 2024',
        author: 'David Brown',
        image: 'https://i.ibb.co/0ZCWnHX/Engagement.jpg',
        content: `
            Your engagement is a time for celebration! Discover creative and fun ideas for your engagement party.
            From engagement photo booths to themed decorations, let the festivities begin with this 100-word guide.
        `,
    },
    {
        title: 'Welcoming a New Chapter: Baby Shower Planning',
        date: 'March 10, 2024',
        author: 'Sarah Wilson',
        image: 'https://i.ibb.co/2gsFk3m/Baby-shower.jpg',
        content: `
            Preparing for a baby shower? Explore our guide to planning the perfect event for the mom-to-be.
            From baby shower themes to adorable decorations, ensure a memorable celebration in 100 words or less.
        `,
    },
];

const Blogs = () => {
    return (
        <div className="container mx-auto mt-8 px-4">
            <h1 className="text-3xl font-semibold mb-6">Recent Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
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
