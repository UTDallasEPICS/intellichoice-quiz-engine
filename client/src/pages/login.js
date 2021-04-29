import React, {useState} from 'react';

const ControlledInputs = () => {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [students, setStudents] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName && pass){
            const student = {id: new Date().getTime().toString(), userName, pass};
            setStudents((students) => {
                return [...students, student];
            });
            setUserName('');
            setPass('');
        }
    }

    return <>
    <article>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='userName'>User Name : </label>
                <input 
                    type='text' 
                    id='userName' 
                    name='userName' 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='pass'>Pass : </label>
                <input 
                    type='text' 
                    id='pass' 
                    name='pass' 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='confirmPass'>Confirm Pass : </label>
                <input 
                    type='text' 
                    id='confirmPass' 
                    name='confirmpass' 
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>
            <button type='submit'>Sign In</button>
        </form>
        {
            students.map((student) => {
                const {id, userName, pass} = student
                return <div key={id}>
                    <h4>{userName}</h4>
                    <h4>{pass}</h4>
                </div>
            })
        }
    </article>
    </>
}

export default ControlledInputs;