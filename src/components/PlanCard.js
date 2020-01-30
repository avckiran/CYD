import React from 'react';

// TODO: This looks like aged. Modernize it later. 

const PlanCard = ({type, setPlanType, planType}) => {
    const message = {
        'Free': [
            'No ads',
            '5 Questions',
            'Summary Analysis'
        ],
        'Subscription': [
            '$2.99 per month Billed Annually',
            'No Ads or spam',
            'Unlimited Checks',
            'Day based Checks',
            'Full Analysis and Weekly, Monthly Reports'
        ],
        'Lifetime': [
            '$99.99 one-time for Lifetime access',
            'No Ads or spam',
            'Unlimited Checks',
            'Day based Checks',
            'Full Analysis, Weekly and Monthly reports'
        ]
    };
    
    return <>
    <div className="plan-card">
        <div className="d-flex justify-content-between">
            <h5 className='text-primary text-left'>{type}</h5>
            <input checked={type === planType} type='radio' name={type} onChange={() => setPlanType(type)}></input>
        </div>
        <div className='text-left'>
            <ul>
                {message[type]}
            </ul>
        </div>
    </div>

    </>
}

export default PlanCard;
