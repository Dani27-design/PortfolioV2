import React from 'react'
import { CircleLoader } from 'react-spinners';
import { Helmet } from 'react-helmet';

function Loading() {
    return (
        <div className="halaman-loading">
            <Helmet>
                <title>Welcome To My Portfolio</title>
            </Helmet>
            <CircleLoader color={"#ff0000"} size={100} />
        </div>
    );
}

export default Loading

