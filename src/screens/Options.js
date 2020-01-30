import React, { useState } from 'react';
import PlanCard from '../components/PlanCard'

const Options = () => {

    const [planType, setPlanType] = useState('');

    const setUserPlan = () => {
        console.log('setUserPlan method : ', planType);
    }

    return (
        <>
        <div className="container mt-5 d-flex justify-content-around flex-column">
            <div className="h4 text-primary text-center">Choose your Option</div>
            <div className='text-center mt-4'>
                <PlanCard type='Free' setPlanType = {setPlanType} planType={planType}/>
                <PlanCard type='Subscription' setPlanType = {setPlanType} planType={planType} />
                <PlanCard type='Lifetime' setPlanType = {setPlanType} planType={planType} />
            </div>
            <div className="footer">
                <button className="btn btn-primary btn-block mt-3" onClick={setUserPlan}>Next</button>
            </div>
        </div>
        </>
    )
}

export default Options;
