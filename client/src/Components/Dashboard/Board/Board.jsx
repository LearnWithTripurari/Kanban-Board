import {h, Fragment} from 'preact';
import {useEffect, useState} from 'preact/hooks';
import './Board.scss';
import UpdateTaskModal from "./UpdateTaskModal/UpdateTaskModal.jsx";
import {environment} from "../../../environment/environment.js";

function Board() {

    const [tasks, setTask] = useState(null);

    const [isUpdateTaskModalOpen, setUpdateTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        fetch(`${environment.API_URL}/tasks`)
            .then(res => res.json())
            .then(apiData => setTask(apiData))
            .catch(error => console.error)
    }, [])

    function onCreateTaskBtnHandler() {
        const createTaskInput = document.querySelector('.create-task-input > input');

        if (createTaskInput.style.display === 'block') createTaskInput.style.display = 'none'; else createTaskInput.style.display = 'block'
    }

    function onTaskEnterBtn(e) {
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
        fetch(`${environment.API_URL}/tasks`, {
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

    function onOpenUpdateTaskModal(task) {
        setSelectedTask(task);
        setUpdateTaskModalOpen(true);
    }


    return (<>
            <div className="board">
        <div className="box">
            <div className="wrapper">
                <div className="box-title">TO DO</div>
                <div className="task-list">
                    {tasks !== null ? (tasks.map((task) => (
                        <div className="list-wrapper" onClick={() => onOpenUpdateTaskModal(task)}>
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
                        <input type="text" placeholder="What needs to be done?" onKeyUp={onTaskEnterBtn}/>
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

            </div>

            <UpdateTaskModal
                task={selectedTask}
                isOpen={isUpdateTaskModalOpen}
                onClose={() => {
                    setSelectedTask(null);
                    setUpdateTaskModalOpen(false)
                }}
                onSave={(updatedTask) => {
                    setSelectedTask(null);
                    setUpdateTaskModalOpen(false)
                    console.log(updatedTask)
                }}
            />
        </>)
}

export default Board;
