class UserModel {
    constructor (justUser){
        this.id = justUser.id;
        this.fname = justUser.fname;
        this.lname = justUser.lname;
        this.email = justUser.email; 
        this.pwd = justUser.pwd;
        this.cond = justUser.cond;
        this.privelage = justUser.privelage;
    }
}

export default UserModel