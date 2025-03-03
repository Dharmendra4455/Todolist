import { useState } from "react";
import style from './Todolist.module.css'
function Todolist(){
    const [tasks,settasks]=useState([])
    const [newtasks,setnewtasks]=useState("")
    const taskhandler=(e)=>{
    setnewtasks(e.target.value);
    document.querySelector("#checkerexist").style.visibility="hidden"
   }
     
    const additem=()=>{
        let existchecker=0;
        if(newtasks.length>0){

          if(newtasks.length>0){
           for(let i in tasks){
           if(tasks[i]===newtasks){
           // console.log("Already Exist!!")
            document.querySelector("#checkerexist").style.visibility="Visible"
            existchecker=1;
            break;
           }
          }
          if(existchecker==0)
          settasks(t=>[...t,newtasks])
        }

        setnewtasks("");
        }
    }
    const deletehandler=(i)=>{
        settasks(tasks.filter((tasks,index)=>index!==i))
    }
    const moveuphandler=(i)=>{
        let temp;
        if(i>0){
            
            temp=tasks[i];
            tasks[i]=tasks[i-1];
            tasks[i-1]=temp;
           settasks([...tasks])
        }
      
    }
 const movedownhandler=(i)=>{
    let temp;
    if(i<tasks.length-1){
        temp=tasks[i];
        tasks[i]=tasks[i+1];
        tasks[i+1]=temp;
       settasks([...tasks])
    }

 }
    return(
        <>
        <div className={style.styles}>
        <h1 className={style.name}>To Do List</h1>
        <input  className={style.input} placeholder="Enter a task..."
         onChange={taskhandler} 
         value={newtasks} 
         type="text"/>
        <button className={style.addbutton}onClick={additem}>Add</button>
         <h5 id="checkerexist" className={style.existchecker}>Name already exist!!</h5>
         <div className="listoftodo">
            <ol className={style.ol}>
                {tasks.map((tasks,index)=>
                <li className={style.liststyle} key={index}><span className={style.text}>{tasks}</span>
                <button class={style.del} onClick={()=>deletehandler(index)}>Delete</button>
                <button className={style.up} onClick={()=>moveuphandler(index)}>👆</button>
                <button className={style.down} onClick={()=>movedownhandler(index)}>👇</button></li>
                )}
            </ol>
         </div>
        </div>
        </>
    )
}
export default Todolist;