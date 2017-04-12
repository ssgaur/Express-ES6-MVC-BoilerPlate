import {BaseModel} from './../core/BaseModel';

class User extends BaseModel{
    
    constructor() {
        super();
    }

    getAll = (callback) => {
        this.db.query('SELECT * FROM users ', function(error, rows, fields) {
            if (error) {
                console.log(error.message);
                callback(error);
            } else {
                callback(rows)
            }
        });

    }

    insert = (data, callback) => {
        this.db.query('INSERT INTO user SET ? ', data, function(error, rows, fields) {
            if (error) {
                console.log(error.message);
                callback(error);
            } else {
                callback(rows)
            }
        });
    }
}; 

export default User;