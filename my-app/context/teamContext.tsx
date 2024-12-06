import { createContext } from "react";

const TeamContext = createContext({
    team: [
        {
            name: "",
            image: ""
        }
    ],
    setTeam: (team: any) => {

    }
});

export default TeamContext;