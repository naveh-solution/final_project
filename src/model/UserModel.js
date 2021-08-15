import {nanoid} from 'nanoid'


class UserModel {

    constructor (justUser){

        this.id = justUser.id;
        this.fname = justUser.fname;
        this.lname = justUser.lname;
        this.email = justUser.email;
        this.gender = justUser.gender;
        this.age = justUser.age; 
        this.pwd = justUser.pwd;
        this.cond = justUser.cond;
        this.privelage = "";
    }
}

export default UserModel