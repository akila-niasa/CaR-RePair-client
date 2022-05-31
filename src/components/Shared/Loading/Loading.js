import React from 'react';
import { GridLoader } from 'react-spinners';
import './Loading.css'

const Loading = ({color, loading, size}) => {
    return (
        <div className="sweet-loading">
        <GridLoader color={color||"#717fe0"} loading={loading}  size={size||30} />
    </div>
    );
};

export default Loading;