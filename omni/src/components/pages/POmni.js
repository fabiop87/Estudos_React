import imgomniangra from "../../img/imgomniangra.jpg";
import TableOmni from "../../Tables/TableOmni";
function POmni() {

    const img =  imgomniangra;
    return (
        <div>

            <img src={img} alt="Imagem do album"/>
            <TableOmni/>

        </div>
    )
}


export default POmni;