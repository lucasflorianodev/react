import React, { useState } from 'react'

const url = "http://localhost:3000/alunos"

const AdicionandoDados = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [curso, setCurso] = useState("")
    const [alunos, setAlunos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const alunosToAdd = {
            nome: nome,
            email: email,
            curso: curso
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(alunosToAdd)
        })

        const addedAlunos = await response.json()

        setAlunos((prevAlunos) => [...prevAlunos, addedAlunos])

        setNome("")
        setEmail("")
        setCurso("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label >
                Nome:
                <input type="text" nome='nome' value={nome} onChange={(e) => setNome(e.target.value)} />
            </label>
            <br />
            <label >
                Email:
                <input type="text" email='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label >
                Curso:
                <input type="text" curso='curso' value={curso} onChange={(e) => setCurso(e.target.value)} />
            </label>
            <br />
            <input type="submit" value='Salvar' />
        </form>
    </div>
  )
}

export default addDados