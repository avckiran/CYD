import React, { useState } from 'react';
import PlanCard from '../components/PlanCard'
import { Redirect } from 'react-router-dom'
import { auth, db } from '../config/Fire';

const Options = () => {

    const [planType, setPlanType] = useState(null);
    const [redirectLink, setRedirect] = useState(null);

    const setUserPlan = () => {
        db.collection('users').doc(auth.currentUser.uid).set({
            planType
        }).then(() => {
            setRedirect(planType);
        }).catch(err => {
            console.error(err.message);
        });
    }

    return (
        <>
        {redirectLink ? (<Redirect to='/home' />) : (
        <div className="container mt-5 d-flex justify-content-around flex-column">
            <div className="h4 text-primary text-center">Choose your Option</div>
            <div className='text-center mt-4'>
                <PlanCard type='Free' setPlanType = {setPlanType} planType={planType}/>
                <PlanCard type='Subscription' setPlanType = {setPlanType} planType={planType} />
                <PlanCard type='Lifetime' setPlanType = {setPlanType} planType={planType} />
            </div>
            <div className="footer">
                {planType ? (
                    <button className="btn btn-primary btn-block mt-3" onClick={setUserPlan}>Next</button>
                ) : (
                    <button disabled className="btn btn-primary btn-block mt-3" onClick={setUserPlan}>Next</button>
                )}
            </div>
        </div>
        )}


        </>
    )
}

export default Options;
