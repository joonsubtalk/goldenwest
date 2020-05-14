import React, { useState, useEffect } from 'react';
import { db, clientRef } from '../firebase';
function Monitor() {
    const [clients, setClients] = useState({});
    function clickHandler(evt) {
        setName(evt.target.value);
    }

    function writeUserData() {
        const num = Math.round(Math.random() * 1000)
        db.ref('clients/' + num).set({
            username: 'joon',
            id: num,
            email: 'example@gmail.com',
            profile_picture: 'www.google.com/ok'
        });
    }

    useEffect(() => {
        clientRef.on('value', function (snapshot) {
            setClients(snapshot.val());
        });
        return function cleanup() {
            clientRef.off();
        };
    }, []);

    return (
        <section className="monitor">
            <div className="monitor__container">
                Monitor - {name}
            </div>
            <button onClick={writeUserData}>Monitor</button>
            {
                clients && Object.values(clients).map(clients => {
                    const { username, email, id, profile_picture } = clients;
                    return <div key={id}>{username} - {email} - {profile_picture}</div>;
                })
            }
        </section>
    );
}
export default Monitor;