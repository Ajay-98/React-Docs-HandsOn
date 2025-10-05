import { useState } from "react";

function Panel({name,children,onShow,dis_flag}){


    return (
      <section className="panel">
 
        <p1>{name}</p1>
        {
             dis_flag ? (
                <p>{children}</p>
            ):(
               <button onClick={onShow}>Show</button>
            )
        }
      </section> 
    );
   }
export default function DisplayNameAge(){
   const [ActiveIndex, setActiveIndex] = useState(0)

    return(
       <>
       <h1> Ajay Maharajan</h1>
       <Panel name="DOB" dis_flag={ActiveIndex === 0} onShow = {()=>setActiveIndex(0)}>
           07/09/1998 
       </Panel>
       <Panel name="Age" dis_flag={ActiveIndex === 1}onShow = {()=>setActiveIndex(1)}>
           27 Years Old 
       </Panel>

       
       </> 
    );
}
