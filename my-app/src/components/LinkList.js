import React from 'react';

const LinkList = ({ links }) => {
    return (
        <ul className="link-list">
            {links.map(link => (
                <li key={link._id}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default LinkList;
