import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const dmsInfo = useLoaderData(); 
    return (
        <div>
            <h2>This is Category has info :{dmsInfo.length}</h2>
        </div>
    );
};

export default Category;