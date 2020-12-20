import React from "react"
import Detail from "../Detail"

//import { NativeRouter, Route, Link } from "react-router-native";





function Recipe(prop) {

  

   console.log(prop);

   const listOfIng = prop.ing;
   const lengthOfIng = prop.ing.length;
  

  const MAX_LENGTH = 250
 
  const listItems = listOfIng.map((d) => <td ><td>{d.ingredient}, </td></td>);
    
    
    deleteTodo(id) {
    this.setState((prop) => ({
        todos: prop.todos.filter(item => item.id !== id),
    }))
};


    const data = <tr>
    <td>  {prop.id} </td>
    <td>  {prop.name} </td>
    <td> <a href={prop.link}> {prop.link}</a> </td>
    <td style={{ textAlign: 'center' }}>  {prop.numOfIng} </td>
    <td>  {listItems}   </td>
    <td>  <td style={{display: prop.prepTimeH===0 && "none"}} > {prop.prepTimeH} H </td>   <td>{prop.prepTimeM} min</td>   </td>
    <td class="text">  {prop.instructions.length > MAX_LENGTH ?
                                    (
                                       <div>
                                         {`${prop.instructions.substring(0, MAX_LENGTH)}...`}
                                       </div>
                                     ) :
                                     <p>{prop.instructions}</p>} </td>
    <td>
     
       {/* <a id={prop.id} href="details.html">See full</a>  */}

         {/* <Route> <link to="details.html"> <text>See full</text>  </link> </Route>*/}

      <button id={prop.id} onClick={() =>{ <Detail chosenId={prop.id}/>}}>See full</button>

      </td>
      <td>
      <button onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
      </td>
 </tr>;
    
    

    return <tbody>
           {data}
            </tbody>
        
   
        
}

export default Recipe
