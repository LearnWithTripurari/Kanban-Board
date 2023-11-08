import {h} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import './Board.scss';

const API_URL = 'http://localhost:8080/api';

function Board() {

    const [tasks, setTask] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/tasks`)
            .then(res => res.json())
            .then(apiData => setTask(apiData))
            .catch(error => console.error)
    }, [])

    function onCreateTaskBtnHandler() {
        const createTaskInput = document.querySelector('.create-task-input > input');

        if (createTaskInput.style.display === 'block') createTaskInput.style.display = 'none'; else createTaskInput.style.display = 'block'
    }

    function onEnter(e) {
        const createTaskInputMsgPlaceholder  = document.getElementById('create-task-input-msg-placeholder');
        createTaskInputMsgPlaceholder.style.display = 'none';

        if (e.key === 'Enter') {
            const title = e.target.value.trim();
            if (title) {
                createTask(title);
                const createTaskInput = document.querySelector('.create-task-input > input');
                createTaskInput.style.display = 'none';
                createTaskInput.value = '';
            }
            else {
                createTaskInputMsgPlaceholder.style.cssText = 'display: block; color: red';
                createTaskInputMsgPlaceholder.innerText = 'Please enter the task!';
            }
        }
    }

    function createTask(title) {
        fetch(`${API_URL}/tasks`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify({title, description: null})
        })
            .then(res => res.json())
            .then(createdTask => {
                setTask([...tasks, createdTask])
            })
            .catch(error => console.error)
    }


    return (<div className="board">
        <div className="box">
            <div className="wrapper">
                <div className="box-title">TO DO</div>
                <div className="task-list">
                    {tasks !== null ? (tasks.map((task) => (<div className="list-wrapper">
                        <div className="list-item-title">{task.title}</div>
                        <div className="list-item-description">{task.description}</div>
                    </div>))) : (<div>Loading...</div>)}
                </div>
                <div className="create-task">
                    <a className="link-button" onClick={onCreateTaskBtnHandler}>
                        <span className="material-symbols-outlined">add</span>
                        Create task
                    </a>
                    <div className="create-task-input">
                        <input type="text" placeholder="What needs to be done?" onKeyUp={onEnter}/>
                        <span id="create-task-input-msg-placeholder"></span>
                    </div>

                </div>
            </div>
        </div>

        <div className="box">
            <div className="title">IN PROGRESS</div>
        </div>

        <div className="box">
            <div className="title">DONE</div>
        </div>
    </div>)
}

export default Board;
