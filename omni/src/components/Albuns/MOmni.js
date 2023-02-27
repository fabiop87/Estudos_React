import Musica from "../Musica";
function Omni() {

    return (
        <>
         {musicas.map((m,t)=>(
            <Musica nome={m} tempo={tempo[t]}/>     
        ))}
        </>
    )
}

export default Omni;

const musicas = ["Light of Transcendence", "Travelers of Time", "Black Widow's Web", "Insania", "The Bottom of My Soul", "War Horns", "Caveman", "Magic Mirror", "Always More", "Ømni - Silence Inside", "Ømni - Infinite Nothing"
];
const tempo = ["4:36", "4:27", "5:49", "5:31", "4:19", "4:43", "5:53", "6:58", "4:43", "8:31", "5:14"];