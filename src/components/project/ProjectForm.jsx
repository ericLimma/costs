import { useState, useEffect } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/input'
import { Select, SubmitButton } from '../form'


export function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <form className={styles.form_container}>

                <Input
                    type='text'
                    text='Nome do Projeto:'
                    name='name'
                    placeholder='ex.: Melhoria de Infraestrutura'
                />
                <Input
                    type='number'
                    text='Orçamento do Projeto: '
                    name='budget'
                    placeholder='ex.: 123,45'
                />
                <Select
                    name='category_id'
                    text='Selecione a categoria: '
                    options={categories}
                />
                <SubmitButton
                    text={btnText} />
            </form>
        </>
    )
}