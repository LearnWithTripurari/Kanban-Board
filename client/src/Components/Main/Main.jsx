import { h } from 'preact';
import './Main.scss';

function Main() {

    function onCreateTask() {
        const createTaskInput = document.querySelector('.create-task-input > input');

        if ( createTaskInput.style.display === 'block')
            createTaskInput.style.display = 'none';
        else
            createTaskInput.style.display = 'block'
    }

    function onEnter(e) {
        if (e.key === 'Enter') {
            console.log(e.target.value);
        }
    }

    return (
        <main className="main-content">

            <div className="board">
                <div className="box">
                    <div className="title">TO DO</div>
                    <div className="create-task">
                        <a className="link-button" onClick={onCreateTask}>
                            <span className="material-symbols-outlined">add</span>
                            Create task
                        </a>
                        <div className="create-task-input">
                            <input type="text" placeholder="What needs to be done?" onKeyUp={onEnter}/>
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

        </main>
    );

}

export default Main;
