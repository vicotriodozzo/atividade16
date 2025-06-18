import React from 'react';

function ListaDeAmigos() {
  const amigos = [
    { id: 1, nome: 'Ana', idade: 16 },
    { id: 2, nome: 'Bruno', idade: 17 },
    { id: 3, nome: 'Carla', idade: 16 }
  ];

  return (
    <div>
      <h2>Meus Amigos</h2>
      <ul>
        {amigos.map((amigo) => (
          <li key={amigo.id}>
            {amigo.nome} ({amigo.idade} anos)
          </li>
        ))}
      </ul>
    </div>
  );
}
