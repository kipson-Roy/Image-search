import React from 'react';

const Imglist = (props) => {
    const kumar = props.images.map ((image) => {
        return <div className="grid-box">
                 <img className="img-responsive" src={image.urls.regular} />
                </div>      
    });

    return <div className="warapper">{kumar}</div>;
};

export default Imglist;