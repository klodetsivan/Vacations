import dal from "../2-utils/dal";
import VacationModel from "../4-models/vacation-model";

async function getAllVacations(): Promise<VacationModel[]> {

    const sql = "SELECT * FROM vacations";
    const vacations = await dal.execute(sql);
    return vacations;

}


// async function addVacation(vacation: VacationModel): Promise<VacationModel> {

//     const sql = `INSERT INTO stores VALUES(DEFAULT,
//      '${vacation.storeName}',
//      '${vacation.description}',
//      '${vacation.address}',
//       ${vacation.latitude},
//       ${vacation.longitude})
//      `;
//     const info: OkPacket = await dal.execute(sql);
//     store.storeId = info.insertId;
//     return store;

// }

export default {
    getAllVacations
};
