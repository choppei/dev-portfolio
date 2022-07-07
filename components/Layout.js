import Head from 'next/head';
import React from 'react';


const Layout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:site_name" content="Portfolio" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="min-h-screen bg-green-400">{children}</div>
          
        </>
    );
};

export default Layout;
