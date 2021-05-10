import React, {ReactElement} from 'react';
import image from '../../../assets/images/anna-hunko-ajE5goOGzZc-unsplash.jpg';
import {Image} from "react-bootstrap";
import '../../../assets/styles/Welcome.scss';

interface WelcomeProps{
  todo?:{
    text:string
  }
}

const Welcome:React.FC<WelcomeProps>=(todo) =>{
  return <div>
    <h1 className={"title"}><strong>My Library</strong></h1>
    <Image src={image} width={1530} height={400}/>
    <p className={"pic-credit-font"}>PC: Anna Hunko</p>
  </div>;
}

export default Welcome;
