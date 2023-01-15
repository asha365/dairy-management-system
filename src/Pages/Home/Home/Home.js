import React from 'react';
import { useLoaderData } from 'react-router-dom';
import InfoSummaryCard from '../../Shared/InfoSummaryCard/InfoSummaryCard';

const Home = () => {
    const AllInfo = useLoaderData();
    return (
        <div>
            <h2>Dairy management system home : {AllInfo.length}</h2>
            {
                AllInfo.map(info => <InfoSummaryCard
                    key={info._id}
                    info={info}
                ></InfoSummaryCard>)
            }
        </div>
    );
};

export default Home;