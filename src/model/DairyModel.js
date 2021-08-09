class DairyModel{
    constructor(plainEvent){
        this.id = plainEvent.id;
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