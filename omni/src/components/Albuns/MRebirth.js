import Musica from "../Musica";
function Rebirth() {

    return (
        <>
         {musicas.map((m,t)=>(
            <Musica nome={m} tempo={tempo[t]}/>     
        ))}
        </>
    )
}

export default Rebirth;

const musicas = ["In Excelsis", "Nova Era", "Millennium Sun", "Acid Rain", "Heroes of Sand", "Unholy Wars", "Rebirth", "Judgement Day", "Running Alone", "Visions Prelude"
];
const tempo = ["01:03", "04:52", "05:11", "06:08", "04:39", "08:14", "05:18", "05:40", "07:14", "04:32"];