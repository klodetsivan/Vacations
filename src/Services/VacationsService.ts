import VacationsModel from "../Models/VacationsModel";
import vacations from "./dummyData";

class VacationsService {

    public  getAllVacations(): any {

        const response = vacations;
        return response;

    }

    public addVacation(vacation:VacationsModel): any{
        const newVacation = new VacationsModel;
        return newVacation;
    }
    // public deleteVacation(vacationId:number): any{
    //   const vacation = await axios.delete<void>(appConfig.productsUrl + id);
      
    //     return vacation;
    // }


}

const vacationsService = new VacationsService();

export default vacationsService;