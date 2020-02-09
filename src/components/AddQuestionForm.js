/*
TODO: 
    - Add icons to the categories
    - Replace checkboxes with the Toggle switches
    - Make a better drop-down list for the Category
    - Form validation messages
    - Separate the Header Component with re-usable links
*/


import React, { useState } from 'react';
import { addQuestionToUser } from '../actions';

const AddQuestionForm = () => {
    const [questionData, setQuestionData] = useState({
        question: '',
        category: 'Health',
        isYesPositive: true,
        everyday: true,
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    });

    const onChange = (e) => {
        switch(e.target.name) {
            case 'question':
            case 'category': 
                setQuestionData({...questionData, [e.target.name]:e.target.value});
                break;
            case 'isYesPositive':
            case 'everyday':
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
            case 'saturday':
            case 'sunday':
                setQuestionData({...questionData, [e.target.name]: e.target.checked})
            default: break;            
        }
    }

    const formSubmit = e => {
        e.preventDefault();
        addQuestionToUser(questionData);
    }




    return (<div className='p-3 m-3'>
        <form id='question-form' onSubmit={e => formSubmit(e)}>
            <div className="form-group">
                <label htmlFor="question">Question</label>
                <input 
                    type="text" 
                    id='question' 
                    required
                    minLength='10'
                    maxLength='100'
                    className="form-control" 
                    name="question" 
                    placeholder="Ex: Did you drink 8 glasses of water"
                    value={questionData.question}
                    onChange = {e => onChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category" 
                    className="form-control"
                    value={questionData.category} 
                    onChange={e => onChange(e)}
                >
                    <option>Health</option>
                    <option>Finance</option>
                    <option>Career</option>
                    <option>Relations</option>
                    <option>Mindfulness</option>
                    <option>Next Project</option>
                </select>
            </div>
            <div className="form-group d-flex justify-content-between">
                <label htmlFor="positive">If you say 'Yes' is that positive? </label>
                <input type="checkbox" checked={questionData.isYesPositive} name='isYesPositive' onChange={e => onChange(e)} />
            </div>
            <div className="form-group d-flex justify-content-between">
                <label htmlFor="everyday">Daily Goal? </label>
                <input type="checkbox" name='everyday' checked={questionData.everyday} onChange={e => onChange(e)} />
            </div>
            <div className={questionData.everyday ? 'form-group d-none' : 'form-group'}>
                <label htmlFor="days">What days of the week you want to check this?</label>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="monday">Monday</label>
                    <input type="checkbox" checked={questionData.monday} name="monday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="tuesday">Tuesday</label>
                    <input type="checkbox" checked={questionData.tuesday} name="tuesday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="wednesday">Wednesday</label>
                    <input type="checkbox" checked={questionData.wednesday} name="wednesday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="thursday">Thursday</label>
                    <input type="checkbox" checked={questionData.thursday} name="thursday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="friday">Friday</label>
                    <input type="checkbox" checked={questionData.friday} name="friday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="saturday">Saturday</label>
                    <input type="checkbox" checked={questionData.saturday} name="saturday" onChange={e => onChange(e)}/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="sunday">Sunday</label>
                    <input type="checkbox" checked={questionData.sunday} name="sunday" onChange={e => onChange(e)}/>
                </div>
            </div>
            <button className="btn btn-primary btn-block mt-3">Add +</button>
        </form>
    </div>
    )
}

export default AddQuestionForm;