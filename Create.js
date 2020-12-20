import React from "react"
import recipesData from "./components/recipesData"
import ingredientsData from "./components/ingredientsData"
import NavBar from "./components/Navbar"

import { Form, Button } from 'semantic-ui-react'

export default class Create extends Component {
  constructor() {
    super()

   const ingrediantsName = ingredientsData.name;

 const numberOfRecipes = recipesData.length;

   recipesData.push(this.state = {
      id: numberOfRecipes-1,
      name: "",
      link: "",
      ingredients: "",
      prepTimeH: "",
      prepTimeM: "",
      instructions: ""
    } )

    
}
handleChange = (e, {name, value}) => {
  console.log(name, value)
  this.setState({[name]: value})
}
render() {
  return (
    <div>
    <NavBar />
      <Form onSubmit={this.sendDataSomewhere}>
        <Form.Field>
          <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="link" value={this.state.link} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
        <Select options={options} onChange={({ingrediantsName}) => this.setValues({ingrediantsName})} />
          <Form.Input name="ingredients" value={this.state.ingredients} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="prepTimeH" value={this.state.prepTimeH} onChange={this.handleChange}/>
          <Form.Input name="prepTimeM" value={this.state.prepTimeM} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="instructions " value={this.state.instructions } onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit">Submit</Button>
       </Form>
     </div>
    )
  }
}


export default Create
