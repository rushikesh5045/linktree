import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import axios from '../api/axios';
import LinkForm from './LinkForm';
import LinkList from './LinkList';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const fetchLinks = async () => {
            const response = await axios.get(`/links/${user.userId}`);
            setLinks(response.data);
        };

        fetchLinks();
    }, [user]);

    const addLink = async (title, url) => {
        const response = await axios.post('/links/create', {
            userId: user.userId,
            title,
            url,
        });
        setLinks([...links, response.data]);
    };

    return (
        <div className="dashboard">
            <div >
            <h2>Welcome,</h2>
            <LinkForm addLink={addLink} />
            </div>
            <div className='lists'><LinkList links={links} /></div>
        </div>
    );
};

export default Dashboard;
