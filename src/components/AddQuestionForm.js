import React, { useState } from 'react';

const AddQuestionForm = () => {
    const [questionData, setQuestionData] = useState({});

    const onChange = (e) => {
        console.log(e.target)
    }


    return (<div className='p-3 m-3'>
        <form id='question-form'>
            <div className="form-group">
                <label htmlFor="question">Question</label>
                <input 
                    type="text" 
                    id='question' 
                    className="form-control" 
                    name="question" 
                    placeholder="Ex: Did you drink 8 glasses of water"
                    onChange = {e => onChange(e)}/>
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-control" onChange={e => onChange(e)}>
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
                <input type="checkbox" id='positive' onChange={e => onChange(e)} />
            </div>
            <div className="form-group">
                <label htmlFor="days">What days of the week you want to check this?</label>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="monday">Monday</label>
                    <input type="checkbox" name="monday" id="monday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="tuesday">Tuesday</label>
                    <input type="checkbox" name="tuesday" id="tuesday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="wednesday">Wednesday</label>
                    <input type="checkbox" name="wednesday" id="wednesday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="thursday">Thursday</label>
                    <input type="checkbox" name="thursday" id="thursday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="friday">Friday</label>
                    <input type="checkbox" name="friday" id="friday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="saturday">Saturday</label>
                    <input type="checkbox" name="saturday" id="saturday"/>
                </div>
                <div className='d-flex justify-content-between'>
                    <label className='day' htmlFor="sunday">Sunday</label>
                    <input type="checkbox" name="sunday" id="sunday"/>
                </div>
            </div>
            <button className="btn btn-primary btn-block mt-3">Add +</button>
        </form>
    </div>
    )
}

export default AddQuestionForm;