import {nanoid} from 'nanoid'

class EventModel{
   
  constructor (plainEvent) {
        this.id = nanoid(6);
        this.eventDate = plainEvent.eventDate;
        this.startT = plainEvent.startT;
        this.endT = plainEvent.endT;
        this.painLoc = plainEvent.painLoc;
        this.physTriger = plainEvent.physTriger;
        this.selfT = plainEvent.selfT;
        this.envStatus = plainEvent.envStatus; 
        this.physHelp = plainEvent.physHelp;
        this.medHelp = plainEvent.medHelp;
        this.otherHelp = plainEvent.otherHelp;
        this.activeUId = plainEvent.activeUId;
      }
}



export default EventModel