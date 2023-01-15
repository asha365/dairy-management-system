import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InfoSummaryCard from '../../Shared/InfoSummaryCard/InfoSummaryCard';

const Category = () => {
    const categoryInfo = useLoaderData(); 
    return (
        <div>
            <h2>This is Category has dms :{categoryInfo.length}</h2>
            {
                categoryInfo.map(info => <InfoSummaryCard
                    key={info._id}
                    info={info}
                ></InfoSummaryCard>)
            }
        </div>
    );
};

export default Category;