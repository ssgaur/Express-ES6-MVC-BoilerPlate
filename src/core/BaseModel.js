import mysql from 'mysql';
 
export class BaseModel {
    constructor() {
        this.db = this.connectDatabase();
    }
 
    connectDatabase = () => {
        console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
        var connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'test'
        })

        connection.connect(function(err) {
          if (err) throw err
          console.log('You are now connected................................................')
        })

        return connection;
    }
}