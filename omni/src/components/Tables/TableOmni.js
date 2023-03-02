import Omni from "../Albuns/MOmni";
function TableOmni() {

    return (
        <div>
            <table>
                <thead>
                    <td>Nome</td>
                    <td>Duração</td>
                </thead>
                <tbody>
                    <Omni/>

                    {/* {musicas.map((m, t) => (
                        <Musica nome={m} tempo={tempo[t]}/>
                    ))} */}

                </tbody>
            </table>
        </div>
    )


}

export default TableOmni;


