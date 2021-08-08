class UserModel {
    constructor (user){
        this.id = user.id;
        this.fname = user.fname;
        this.lname = user.lname;
        this.email = user.email; 
        this.pwd = user.pwd;
        this.privelage = user.privelage;
    }
}

export default UserModel