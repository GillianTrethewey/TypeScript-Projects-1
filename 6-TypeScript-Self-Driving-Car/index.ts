import { getObstacleEvents } from './computer-vision';

interface AutonomousCar {
  isRunning?: boolean;
  respond: (event: Events) => void;
}

interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface Events {
  [event: string]: boolean;
}

interface Control {
  execute: (command: string) => void;
}

interface Steering extends Control {
  turn: (direction: string) => void;
}

class Car implements AutonomousCar {
  isRunning;
  steeringControl;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  };

  respond(events: Events) {
    Object.keys(events).forEach(eventKey => {
      if (!events[eventKey]) {
        return;
      }
      if (eventKey === 'ObstacleLeft') {
        this.steeringControl.turn('right');
      } 

      if (eventKey === 'ObstacleRight') {
        this.steeringControl.turn('left');
      }
    })
    // refactored
    //this.steeringControl.turn(events['ObstacleLeft'] ? 'right' : 'left');

    if (!this.isRunning) {
      return console.log(`The car is off!`);
    }
  }
}

class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: turn ${command}`)
  }
  turn(direction: string) {
    this.execute(direction);
  }
}

const steering = new SteeringControl();
const autonomousCar = new Car({isRunning: true, steeringControl: steering});
autonomousCar.respond(getObstacleEvents());