import Head from 'next/head';
import React from 'react';

function Home() {
    return (
        <section className="page">
            <Head>
                <title>GoldenWest</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="page__container">
                Golden
            </div>
        </section>
    );
}
export default Home;