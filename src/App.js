import React from 'react';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import './App.css';
import RandomNumber from './components/Random';
import BoxColour from './components/BoxColour';
import DriverCard from './components/DriverCard';

function App() {
  return (
    <div className="App">
      <div className="idCard">
        <IdCard
          lastName="Smith"
          firstName="John"
          gender="male"
          height={180}
          birth={new Date('1982-02-11')}
          picture="https://img.ecartelera.com/personas/mini/3800/3845_th0.jpg"
        />
        <IdCard
          lastName="Smith"
          firstName="Sarah Jane"
          gender="female"
          height={162}
          birth={new Date('1967-11-02')}
          picture="http://doctorwhoworlduk.com/wp-content/uploads/2018/10/sjhandfearh.jpg"
        />
      </div>
      <br />
      <div>
        <Greetings lang="de">Ludwig</Greetings>
        <br />
        <Greetings lang="fr">François</Greetings>
        <br />
        <Greetings lang="es">Alejandro</Greetings>
        <br />
        <Greetings lang="en">Kim</Greetings>
      </div>
      <br />
      <div className="random-number">
        <RandomNumber min={1} max={6} />
        <RandomNumber min={1} max={100} />
      </div>
      <div>
        <BoxColour r={255} g={0} b={0} />
        <BoxColour r={0} g={204} b={255} />
      </div>
      <div>{/* <Rating>3.5</Rating> */}</div>
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
    </div>
  );
}

export default App;
