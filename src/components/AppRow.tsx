import React from "react";
import type { Application } from "../types/Aplication";

interface AppRowProps{
  app:Application;
}


const AppRow: React.FC<AppRowProps> = ({app}) => {
  return(
    <tr>
      <td>{app.name}</td>
      <td>
        {app.domains.length>0
        ? app.domains.join(', ')
        : "Sin dominios"
        }
      </td>
    </tr>
  );
};

export default AppRow;