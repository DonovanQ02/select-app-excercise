import type { Application } from './types/Aplication'
import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import appsData from "../apps-db.json"
import AppRow from './components/AppRow'

function App() {
  const cleanDomain = (domain: string | undefined | null) => {
    if (!domain || typeof domain !== 'string') return '';
    return domain
      .replace(/^https?:\/\//, "") // quita http:// o https://
      .replace(/^www\./, "");      // quita www.
  };
  
  const [apps, setApps] = useState<Application[]>(appsData.sort((a,b) => {
    const aHasDomain = a.domains.length > 0;
    const bHasDomain = b.domains.length > 0;


    // 1️⃣ Apps sin dominios primero

    if(!bHasDomain && aHasDomain) return 1;
    if(bHasDomain && !aHasDomain) return -1;

    // 2️⃣ Si ambos no tienen dominios → orden alfabético por nombre

    if(!bHasDomain && !aHasDomain){
      return a.name.localeCompare(b.name);
    }

    const domainA = cleanDomain(a.domains[0]);

    const domainB = cleanDomain(b.domains[0]);

    return domainA.localeCompare(domainB);
  }))

  const UbicacionInsertar = (name:string) => {
    for(let i =0; i < apps.length; i++){
      let ordenamiento = apps[i].name.localeCompare(name)
      if (ordenamiento === 0 || ordenamiento === 1){
          return i
      } 
    }
    return apps.length
  }

  const ManejarAgregadoApp = (name:string) => {
    let ubicacion = UbicacionInsertar(name);
    const newApp:Application = {
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      domains: []
    };

    let appsConValorAgregado = [...apps]
    appsConValorAgregado.splice(ubicacion-1, 0, newApp)
    setApps(appsConValorAgregado)
  };

  



  // const orderedApps = [...apps].sort((a,b) => {
  //   const aHasDomain = a.domains.length > 0;
  //   const bHasDomain = b.domains.length > 0;


  //   // 1️⃣ Apps sin dominios primero

  //   if(!bHasDomain && aHasDomain) return -1;
  //   if(bHasDomain && !aHasDomain) return 1;

  //   // 2️⃣ Si ambos no tienen dominios → orden alfabético por nombre

  //   if(!bHasDomain && !aHasDomain){
  //     return a.name.localeCompare(b.name);
  //   }

  //   const domainA = cleanDomain(a.domains[0]);

  //   const domainB = cleanDomain(b.domains[0]);

  //   return domainA.localeCompare(domainB);
  // })

  return (
    <>
      <Formulario onAdd={ManejarAgregadoApp}></Formulario>
      <h2>Lista de apps</h2>

      <table className='apps-table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Dominios</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app) => (
            <AppRow key={app.id} app={app}/>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
