import React, { useState } from 'react';
import withAuth from '../helpers/withAuth';
import Monitor from '../components/monitor';
function Dashboard() {
    const [name, setName] = useState('test');
    function clickHandler(evt) {
        setName(evt.target.value);
    }
    return (
        <section className="dashboard">
            <div className="dashboard__container">
                Dashboard
                <Monitor />
            </div>
        </section>
    );
}
export default withAuth(Dashboard);