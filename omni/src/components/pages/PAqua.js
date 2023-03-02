import imgaquaangra from "../../img/imgaquaangra.jpg";
import TableAqua from "../Tables/TableAqua";
function PAqua() {

    const img =  imgaquaangra;
    return (
        <div>

            <img src={img} alt="Imagem do album"/>
            <TableAqua/>

        </div>
    )
}


export default PAqua;