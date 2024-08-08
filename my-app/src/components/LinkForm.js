import React, { useState } from 'react';

const LinkForm = ({ addLink }) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addLink(title, url);
        setTitle('');
        setUrl('');
    };

    return (
        <form onSubmit={handleSubmit} className="link-form">
            <input 
                type="text" 
                className="link-form-title" 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
            />
            <input 
                type="url" 
                className="link-form-url" 
                placeholder="URL" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)} 
                required 
            />
            <button type="submit" className="link-form-button">Add Link</button>
        </form>
    );
};

export default LinkForm;
