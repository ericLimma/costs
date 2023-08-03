import styles from './NewProjects.module.css'
import { ProjectForm } from '../project'
import { useNavigate } from 'react-router-dom'

export function Projects() {
    const history = useNavigate();

    function createPost(project) {

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('https:/localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            }
            ).catch((err) => console.log(err))

    }
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit ={createPost} btnText='Criar Projeto' />
        </div>
    )
}

//history('/projects', {message : "Projeto criado com sucesso!"})