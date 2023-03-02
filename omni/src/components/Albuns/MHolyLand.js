import Musica from "../Musica";
function HolyLand() {

    return (
        <>
         {musicas.map((m,t)=>(
            <Musica nome={m} tempo={tempo[t]}/>     
        ))}
        </>
    )
}

export default HolyLand;

const musicas = ["Crossing", "Nothing to Say", "Silence and Distance", "Carolina IV", "Holy Land", "The Shaman", "Make Believe", "Z.I.T.O.", "Deep Blue", "Lullaby for Lucifer"
];
const tempo = ["01:56", "06:22", "05:35", "10:36", "06:26", "05:24", "05:53", "06:04", "05:49", "02:40"];