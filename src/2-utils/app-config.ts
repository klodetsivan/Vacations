class AppConfig {

    // Database: 
    public host = "localhost"; // Computer name/address of our database
    public user = "root"; // Database user
    public password = ""; // Database password
    public database = "vacations"; // Database name

    // Server port: 
    public port = 3003;

}

const appConfig = new AppConfig();

export default appConfig;