import { useState } from "react";

export default function MyForm(){

    const [answer, setAnswer] = useState('');
    const [error, setError]= useState(null);
    const [status, setStatus] = useState('typing');

    if(status === 'success'){
        return <h1> That's Right !!!!, YAY!!!</h1>
    }

    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        } catch(err){
            setStatus('typing');
            setError(err);
        }

    }
    function handleTextaresChange(e){
        setAnswer(e.target.value);
    }
    return (
        <>
            {/* Heading instead of using <title> in body */}
            <h1>Validate Name</h1>
        
            <form onSubmit={handleSubmit}>
                <textarea
                value = {answer} 
                onChange={handleTextaresChange}
                disabled = {status === 'submitting'}
                />
                <br />
                <button disabled = {
                    answer.length === 0 ||
                    status === 'submitting'
                }> Submit </button>
                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                
                }
            </form>
        </>
    );
}

function submitForm(answer){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let ShouldError = answer.toLowerCase() !== 'poo Poo'
            console.log(answer)
            if(ShouldError){
                reject(new Error('Good guess but a maybe you are wrong Guy'));
            }
            else {
                resolve();
            }
        }, 1500);
    });
}
