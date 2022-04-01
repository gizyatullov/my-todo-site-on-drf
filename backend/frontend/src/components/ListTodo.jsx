import React from 'react'
import {useParams} from "react-router-dom";

const ItemTodo = ({todo}) => {
    return(
        <tr>
            <td>{todo.id}</td>
            <td>{todo.text}</td>
            <td>{todo.project.name}</td>
            <td>{todo.user.username}</td>
            <td>{todo.createdAt}</td>
            <td>{todo.updatedAt}</td>
        </tr>
    )
}

const ListTodo = ({todos}) => {
    let {id} = useParams()
    id = parseInt(id)
    if (id) {
        todos = todos.filter((item) => item.project.id === id)
    }
    return(
        <div className="container">
        <table className="table">
                <th>Номер</th>
                <th>Текст</th>
                <th>К проекту</th>
                <th>Создатель</th>
                <th>Дата создания</th>
                <th>Дата обновления</th>
                {todos.map((todo) => <ItemTodo todo={todo}/>)}
        </table>
        </div>
    )
}

export default ListTodo