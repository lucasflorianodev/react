import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    //<div><EstouConseguindoAprenderReact estouConseguindo = {false}/></div>
    <div><EstouConseguindoAprenderReact estouConseguindo = {false}/>{
      [
      {nome: "Emilly", email: "esmi@gmail.com", curso: "Sistemas para internet", media: 9},
      {nome: "Nattan", email: "nattanzinho@gmail.com", curso: "Sistemas para internet", media: 6},
      {nome: "Claudio", email: "claudinho@gmail.com", curso: "Sistemas da informação", media: 7}
      ].map((aluno) => <Aluno nome = {aluno.nome} email = {aluno.email} curso = {aluno.curso} media = {aluno.media}/>)
    }</div>
    
  )
}

export default App