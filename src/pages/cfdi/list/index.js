import react, { useState, useEffect }  from   'react'
import {getAllCfdis} from "../../../services/main"
import DataTable from 'react-data-table-component'

export const ListCfdi = (proops) =>
{
    
    useEffect(()=>{
        cfdis();
    },[])

    const [rows,setRows] = useState([]);

    const cfdis = async () =>
    {   
        let response = await getAllCfdis();
        
        if(!response)
            return;
        
        let data = response.data;
        let list = data.cfdis;
        console.log(list);
        setRows(list);
    }

    const columns = [
        {
            name: 'ID',
            selector: 'id',
            sortable: true
        },
        {
            name: 'Tipo Documento',
            selector: 'TipoDocumento',
            sortable: true
        },
        {
            name: 'Uso CFDI',
            selector: 'UsoCFDI',
            sortable: true
        },
        {
            name: 'Serie',
            selector: 'Serie',
            sortable: true
        },
        {
            name: 'Status',
            selector: 'status',
            sortable: true
        },
        
    ]
    const paginationOptions ={
        rowsPerPageText: 'Filas por pagina',
        rangeSeparator: 'de',
        selectAllRowsItem: true,
        selectAllRowsText:'todos',
    }
    

    return(
        <>
        <h1>Esta es la vista de lista de CFDI</h1>
        <DataTable
         columns ={columns}
         data = {rows}
         title ={'Lista de CFDIS'}
         pagination
         paginationComponentOptions = {paginationOptions}
        />
        </>
    )
}