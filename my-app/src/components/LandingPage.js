import React from 'react';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to Linktree</h1>
            <p>Your one-stop destination to manage and share all your important links in one place.</p>
            
            <section className="intro-section">
                <h2>Why Use Linktree?</h2>
                <p>Linktree allows you to consolidate all your online profiles, websites, and important links into a single, easy-to-share URL. Whether you're a content creator, business, or just want to keep your followers updated, Linktree is the perfect solution.</p>
            </section>
            
            <section className="features-section">
                <h2>Features</h2>
                <ul>
                    <li><strong>Easy Link Management:</strong> Quickly add, update, and remove links as needed.</li>
                    <li><strong>Customizable Appearance:</strong> Tailor your Linktree to match your brand or personal style.</li>
                    <li><strong>Analytics:</strong> Track link clicks and performance to understand your audience better.</li>
                    <li><strong>Integrations:</strong> Connect with your favorite social media platforms and tools.</li>
                </ul>
            </section>
            
            <section className="get-started-section">
                <h2>Get Started</h2>
                <p>Creating your own Linktree is simple and free. Just sign up, customize your page, and start sharing your links. Join thousands of users who are already simplifying their online presence.</p>
            </section>
        </div>
    );
};

export default LandingPage;
