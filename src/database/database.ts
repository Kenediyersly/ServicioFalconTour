import mssql from  'mssql';

export async function connect(){
    const confi = {
        user : "Kenediyersly_SQLLogin_1",
        password : "ada18ndgou",
        server : "falcontour.mssql.somee.com",
        database : "falcontour"
    };
    const connection = await new mssql.ConnectionPool(confi).connect();
    return connection;
}