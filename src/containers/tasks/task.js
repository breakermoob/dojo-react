import React, { Component } from 'react';
import Cards from '../../components/cards/cards'
import axios from 'axios';

class Tasks extends Component {

   state = {
      taskData: []
   };

   componentDidMount() {
      axios.get('http://api-rest-taskmanager-dojo.herokuapp.com/api/v1/tasks', {
         headers: {
            authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODIzNzc2NzcsImV4cCI6MTU4Mjk4MjQ3N30.toispa-BmJmcc4YJL45_RDa-_SU_mMSGJZ-QyK7_LjQ'
         }
      })
         .then(res => {
            // console.log(res)
            //Almacenamos el response en el state
            this.setState({
               taskData: res.data.results
            })
         })
         .catch(error => { console.log(error) })
   }

   // constructor(props){
   //    super(props);
   // }

   render() {
      //Operador Ternario, utilizado para mejorar la sintaxis condicion?ejecuta:No
      const cardsView = (
         this.state.taskData.length ?
            <Cards data={this.state.taskData} />//if ejecuta
            : null);//else no
      return (
         <div>
            {cardsView}
         </div>
      );
   }
}

export default Tasks;