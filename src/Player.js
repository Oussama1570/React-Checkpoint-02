import React from 'react';
import Card from 'react-bootstrap/Card';
import image from 'react-bootstrap/Card';




const Player = ({ player }) => {
    return (
        

<Card style={{ width: '18rem',  justifyContent:'space-between' , display:'flex', marginTop:'10%', marginBottom:'10%', backgroundColor:'gray'}}>
     
      <Card.Body>
      <Card.Img variant="top" src={player.imageUrl} />
      {/* {player.imageUrl}  */}
        <Card.Title>Name:{player.name}</Card.Title>
        <Card.Text> Team: {player.team} </Card.Text>
        <Card.Text> Nationality: {player.nationality} </Card.Text>
        <Card.Text> Jersey Number: {player.jerseyNumber} 
          
        </Card.Text>
        <Card.Text>
        Age: {player.age}
        </Card.Text>
        
      </Card.Body>
    </Card>
    ) };




      
   
  export default Player;