import { useEffect, useState } from "react";
import VacationsModel from "../../../Models/VacationsModel";
import vacationsService from "../../../Services/VacationsService";
import VacationCard from "../VacationCard/VacationCard";
import "./VacationsList.css";

function VacationsList(): JSX.Element {

    const [vacations, setVacations] = useState<VacationsModel[]>();

    useEffect(() => {
        vacationsService.getAllVacations()
            .then(vacations => setVacations(vacations))
            .catch(err => alert(err.message))
    }, [])


    return (
        <div className="VacationsList">

            <div>
                {vacations.map(v => <VacationCard key={v.vacationId} vacation={v} />)}
            </div>


        </div>
    );
}

export default VacationsList;
