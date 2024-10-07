// frontend/src/components/WelcomeMessage.js
import React, { useEffect, useState } from 'react';

const WelcomeMessage = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const response = await fetch('/api/welcome');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération du message');
                }
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMessage();
    }, []);

    return (
        <div>
            {message && <h1>{message}</h1>}
        </div>
    );
};

export default WelcomeMessage;
