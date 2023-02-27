import Musica from "../Musica";
function Aqua() {

    return (
        <>
         {musicas.map((m,t)=>(
            <Musica nome={m} tempo={tempo[t]}/>     
        ))}
        </>
    )
}

export default Aqua;

const musicas = ["Viderunt Te Aquae", "Arising Thunder", "Awake from Darkness", "Lease of Life", "The Rage of the Waters", "Spirit of the Air", "Hollow", "A Monster in Her Eyes", "Weakness of a Man", "Ashes"
];
const tempo = ["1:01", "4:52", "5:55", "4:34", "5:43", "5:23", "5:31", "5:16", "6:13", "5:12"];