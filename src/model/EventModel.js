import {nanoid} from 'nanoid'

class EventModel{
   
  constructor (plainEvent) {
        this.id = nanoid(6);
        this.date = plainEvent.date;
        this.sTime = plainEvent.sTime;
        this.eTime = plainEvent.eTime;
        this.painLoc = plainEvent.painLoc;
        this.physTriger = plainEvent.physTriger;
        this.selfThou = plainEvent.selfThou;
        this.envStatus = plainEvent.envStatus; 
        this.physHelp = plainEvent.physHelp;
        this.medHelp = plainEvent.medHelp;
        this.otherHelp = plainEvent.otherHelp;
        this.userId = plainEvent.userId;
      }
}

export default EventModel