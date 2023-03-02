import imgholylandangra from "../../img/imgholylandangra.jpg";
import TableHolyLand from "../Tables/TableHolyLand";
function PHolyLand() {

    const img =  imgholylandangra;
    return (
        <div>

            <img src={img} alt="Imagem do album"/>
            <TableHolyLand/>

        </div>
    )
}


export default PHolyLand;