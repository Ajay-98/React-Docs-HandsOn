import { useState } from "react";

function Panel({name,children}){

    const[dis_flag, setdis_flag] = useState(false);

    return (
      <section className="panel">
 
        <p1>{name}</p1>
        {
             dis_flag ? (
                <p>{children}</p>
            ):(
               <button onClick={()=> setdis_flag(true)}>Show</button>
            )
        }
      </section> 
    );
   }
export default function DisplayNameAge(){
    

    return(
       <>
       <h1> Ajay Maharajan</h1>
       <Panel name="DOB" >
           07/09/1998 
       </Panel>
       <Panel name="Age" >
           27 Years Old 
       </Panel>

       
       </> 
    );
}
