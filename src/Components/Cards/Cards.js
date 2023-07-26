import {Card, Image } from 'semantic-ui-react'
import lndn from '../../assets/lndn.png';
import minirogue from '../../assets/minirogue.png';
import ododo from '../../assets/ododo.png';
import bonnefetemaman from '../../assets/bonnefetemaman.png';
import './Cards.scss'
import ScratchProject from '../ScratchProject';
const Cards = () => (
  <Card.Group className='CardContent'>
    <Card >
      <Card.Content>
        <a href="https://lanuitdunecromancien.surge.sh" target="_blank" rel="noopener noreferrer">
          <Image
          src={lndn}
        /></a>
        <Card.Header>La nuit du nécromancien</Card.Header>
        <Card.Meta>Un livre dont vous êtes le héros ça vous dis quelque chose ? Ces livres jeux/aventures ont bercé mon enfance.
        
            </Card.Meta>
        <Card.Description>
        Il s'agit ici dans cette application en mobile first
            de remplacer la feuille d'aventure présente dans le livre, également le crayon et les dés.
            Passioné de jeu de société je code des Apps companion !
        </Card.Description>
      </Card.Content>
    </Card>


    <Card>
      <Card.Content>
      <a href="https://minirogue.surge.sh" target="_blank" rel="noopener noreferrer">
          <Image
          src={minirogue}
        /></a> 
        <Card.Header>Mini Rogue</Card.Header>
        <Card.Meta>Des jetons qui tombent ?</Card.Meta>
        <Card.Description>
        Grace a cette application, fini les jetons qui tombent tu plateau héros ! Celle ci remplace le plateau physique afin d'éviter les déconvenues ! créer pour le jeu de société Mini Rogue
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
      <a href="https://ododolepanda.surge.sh" target="_blank" rel="noopener noreferrer">
        <Image    
          src={ododo}
        /></a>
        <Card.Header>O'dodo le panda</Card.Header>
        <Card.Meta>Animal Virtuel</Card.Meta>
        <Card.Description>
        Souvenez vous de nos anciens petits jeux d'animaux virtuels, ici on s'amuse avec un petit Panda ! Prenez soin de lui et faite le combattre !
        </Card.Description>
      </Card.Content>
    </Card>

    <Card>
      <Card.Content>
      <a href="https://bonnefetemaman.surge.sh" target="_blank" rel="noopener noreferrer">
        <Image    
          src={bonnefetemaman}
        /></a>
        <Card.Header>Bonne fête maman</Card.Header>
        <Card.Meta>App fête des mères</Card.Meta>
        <Card.Description>
        Quoi de mieux qu'une petite application remplie de surprise pour la fête des mère !
        Ici des éléments sont cachés !
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
      <ScratchProject />
        <Card.Header>Petit jeu fête des mères</Card.Header>
        <Card.Meta>App fête des mères</Card.Meta>
        <Card.Description>
        Petit jeu créer pour l'occasion de la fête des mères avec Scratch
        </Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
)

export default Cards


