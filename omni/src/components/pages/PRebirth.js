import imgrebirthangra from "../../img/imgrebirthangra.jpg";
import TableRebirth from "../Tables/TableRebirth";
function PRebirth() {

    const img =  imgrebirthangra;
    return (
        <div>

            <img src={img} alt="Imagem do album"/>
            <TableRebirth/>

        </div>
    )
}


export default PRebirth;