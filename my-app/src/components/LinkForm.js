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
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
            <button type="submit">Add Link</button>
        </form>
    );
};

export default LinkForm;
