function Evento() {
  function meuEvento() {
    console.log('Miau');
  }

  return (
    <div>
      <p>Clique no Sapato:</p>
      <button onClick={meuEvento}>Sapato</button>
    </div>
  )
}

export default Evento;