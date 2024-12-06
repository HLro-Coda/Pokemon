import { createContext } from "react";

const TeamContext = createContext({
    
    team: [
        {
           
            name: "",
            image: ""   
        }
    ],
    setTeam: (limit: 6) => {

    }
});

export default TeamContext;