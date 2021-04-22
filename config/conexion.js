var mysql=require('mysql');

var con=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    database:'biblioteca'

});

con.connect(
    (e)=>{
        if(!e){
            console.log('Conexion establecida');
        }else{
            console.log("error de conexion");
        }
    }
);


module.exports=con;