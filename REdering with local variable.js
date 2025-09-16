
function Box_1({Message}){
 
    function ClickAction(){ 

        document.body.style.backgroundColor = "Purple";
    }
    return (
        <>
        <button onClick={()=>ClickAction()} type="button" > {Message}</button>
       
        </>
    );
}
function Box_2({Message}){
 
    function ClickAction(){ 

        document.body.style.backgroundColor = "Blue";
    }
    return (
        <>
        <button onClick={()=>ClickAction()} type="button" > {Message}</button>
       
        </>
    );

}
export default function App()
{
    const Message_1 = "Go Purple";
    const Message_2 = "Go Blue";

    return(
        <div className = "body" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            gap: '10px'
        }}>
            <Box_1 Message = {Message_1} /> <Box_2 Message = {Message_2} />
            </div>

    );
}
