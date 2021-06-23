import react, { useState, useEffect }  from   'react'
import {getAllCfdis} from "../../../services/main"

export const ListCfdi = (proops) =>
{
    
    useEffect(()=>{
        cfdis();
    },[])

    const cfdis = async () =>
    {   
        let response = await getAllCfdis();
        let data = response.data;
        let list = data.cfdis;
        console.log(list);
    }
    

    return(
        <>
        <h1>Esta es la vista de lista de CFDI</h1>
        </>
    )
}