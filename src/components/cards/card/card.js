import React from 'react';

const card = (props) => {
   return(
      <div>
         <h1>{props.title}</h1>
         <p>{props.content}</p>
         <span>{props.responsable}</span>
      </div>
   );
}
export default card;

