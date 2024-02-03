import { useEffect, useState } from 'react';
import './Board.scss';
import { environment } from '../../../environment/environment';
import UpdateTaskModal from "./UpdateTaskModal/UpdateTaskModal.tsx";


function Board() {

    const [tasks, setTask] = useState<any>(null);

    const [isUpdateTaskModalOpen, setUpdateTaskModalOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        fetch(`${environment.API_URL}/tasks`)
            .then(res => res.json())
            .then(apiData => setTask(apiData))
            .catch(error => console.error(error))
    }, [])

    function onCreateTaskBtnHandler() {
        const createTaskInput: HTMLInputElement | null = document.querySelector('.create-task-input > input');

        if (createTaskInput) {
            createTaskInput.style.display === 'block' ? createTaskInput.style.display = 'none' : createTaskInput.style.display = 'block'
        }

    }

    function onTaskEnterBtn(e: any) {

        const createTaskInputMsgPlaceholder: HTMLSpanElement | null = document.getElementById('create-task-input-msg-placeholder');

        if (createTaskInputMsgPlaceholder) {
            createTaskInputMsgPlaceholder.style.display = 'none'
        }

        if (e.key === 'Enter') {
            const title = e.target.value.trim();

            if (title) {
                createTask(title);
                const createTaskInput: HTMLInputElement | null = document.querySelector('.create-task-input > input');

                if (createTaskInput) {
                    createTaskInput.style.display = 'none';
                    createTaskInput.value = '';
                }
            }
            else {

                if (createTaskInputMsgPlaceholder) {
                    createTaskInputMsgPlaceholder.style.cssText = 'display: block; color: red';
                    createTaskInputMsgPlaceholder.innerText = 'Please enter the task!';
                }

            }
        }
    }

    function createTask(title: any) {
        fetch(`${environment.API_URL}/tasks`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify({ title, description: null })
        })
            .then(res => res.json())
            .then(createdTask => {
                setTask([...tasks, createdTask])
            })
            .catch(error => console.error(error))
    }

    function onOpenUpdateTaskModal(task: any) {
        setSelectedTask(task);
        setUpdateTaskModalOpen(true);
    }


    return (<>
        <div className="board">
            <div className="box">
                <div className="wrapper">
                    <div className="box-title">TO DO</div>
                    <div className="task-list">
                        {tasks !== null ? (tasks.map((task: any) => (
                            <div className="list-wrapper" onClick={() => onOpenUpdateTaskModal(task)} key={task.title}>
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
                            <input type="text" placeholder="What needs to be done?" onKeyUp={onTaskEnterBtn} />
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
            onSave={(updatedTask: any) => {
                setSelectedTask(null);
                setUpdateTaskModalOpen(false)
                console.log(updatedTask)
            }}
        />
    </>)
}

export default Board;
