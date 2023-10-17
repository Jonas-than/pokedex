import React from 'react'

function Card({data}) {
  return (
    <div id='card'>
        <div id='cardDiv-first'>
          <img src={data?.sprites.other.home.front_default} alt={data?.name} />
        </div>
        <div id='cardDiv-second'>
          <table>
            <thead>
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td>{data?.id}</td>
              </tr>
              <tr>
                <td>Nombre</td>
                <td>{data?.name}</td>
              </tr>
              <tr>
                <td>Altura</td>
                <td>{data?.height}</td>
              </tr>
              <tr>
                <td>Peso</td>
                <td>{data?.weight}</td>
              </tr>
              <tr>
                <td>Experiencia base</td>
                <td>{data?.base_experience}</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
  )
}

export default Card