import React from 'react';
import Card from './card/card'

const cards = (props) => {
   console.log(props)
   const cards = props.data.map(card => {
      return (
         <Card 
         key={card._id}
         title={card.title}
         content={card.content} 
         responsable={card.responsible} />
      )
   });
   return (
      <div>
         {cards}
      </div>
   );
}
export default cards;

