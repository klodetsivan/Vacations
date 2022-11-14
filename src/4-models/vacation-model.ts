
import Joi from "joi";
import RoleModel from "./role-model";
import UserModel from "./user-model";

class VacationModel {

    public vacationId: number;
    public description: string;
    public destination: string;
    public checkIn: string;
    public checkOut: string;
    public price: string;
    public followersAmount: number;

    public constructor(vacation: VacationModel) {
        this.vacationId = vacation.vacationId;
        this.description = vacation.description;
        this.destination = vacation.destination;
        this.checkIn = vacation.checkIn;
        this.checkOut = vacation.checkOut;
        this.price = vacation.price;
        this.followersAmount = vacation.followersAmount;
    }


    public static validationSchema = Joi.object({
        vacationId: Joi.number().optional().integer().positive(),
        description: Joi.string().required().min(2).max(500),
        destination: Joi.string().required().min(2).max(300),
        checkIn: Joi.string().required().min(4).max(20),
        checkOut: Joi.string().required().min(4).max(20),
        price: Joi.string().required().min(4).max(10000),
        followersAmount: Joi.number().required()
 
    });

    public validate(): string {
        const result = VacationModel.validationSchema.validate(this);
        return result.error?.message
    }
}

export default VacationModel;