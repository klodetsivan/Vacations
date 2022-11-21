import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import VacationsModel from "../../../Models/VacationsModel";
import notifyService from "../../../Services/NotifyService";
import vacationsService from "../../../Services/VacationsService";
import "./AddVacation.css";

function AddVacation(): JSX.Element {


    const { register, handleSubmit, formState } = useForm<VacationsModel>();
    const navigate = useNavigate();

    async function send(vacation: VacationsModel) {
        try {
            await vacationsService.addVacation(vacation);
            notifyService.success("vacation has been successfully added");
            navigate("/vacations")
        }
        catch (err: any) {
            notifyService.error(err);
        }

    }

    return (
        <div className="AddVacation Box">
			
            <form onSubmit={handleSubmit(send)}>

                <h2>Add Vacation</h2>

                <label>Description:</label>
                <input type="text" {...register("description")} />
                <span className="Error">{formState.errors.description?.message}</span>

                <label>Destination:</label>
                <input type="number" {...register("destination")} />
                <span className="Error">{formState.errors.destination?.message}</span>

                <label>Check-In:</label>
                <input type="number" {...register("checkIn")} />
                <span className="Error">{formState.errors.checkIn?.message}</span>

                <label>Check-Out:</label>
                <input type="number" {...register("checkOut")} />
                <span className="Error">{formState.errors.checkOut?.message}</span>

                <label>Price:</label>
                <input type="number" {...register("price")} />
                <span className="Error">{formState.errors.price?.message}</span>
                
                <label>Followers:</label>
                <input type="number" {...register("followersAmount")} />
                <span className="Error">{formState.errors.followersAmount?.message}</span>



                <button>Add</button>

            </form>


        </div>
    );
}

export default AddVacation;
