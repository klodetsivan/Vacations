import VacationsModel from "../../../Models/VacationsModel";
import "./VacationCard.css";

interface VacationCardProps {
    vacation: VacationsModel;
}

function VacationCard(props: VacationCardProps): JSX.Element {
    return (
        <div className="VacationCard">

            <span>description: {props.vacation.description}</span>
            <br />
            <span>destination: {props.vacation.destination}</span>
            <br />
            <span>checkIn: {props.vacation.checkIn}</span>
            <br />
            <span>checkOut: {props.vacation.checkOut}</span>
            <br />
            <span>price: {props.vacation.price}</span>
            <br />
            <span>followersAmount: {props.vacation.followersAmount}</span>

        </div>
    );
}

export default VacationCard;
