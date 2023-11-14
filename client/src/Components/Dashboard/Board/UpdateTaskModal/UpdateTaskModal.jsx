import {h} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import './UpdateTaskModal.scss'
import {environment} from "../../../../environment/environment.js";

function UpdateTaskModal({task, isOpen, onSave, onClose}) {

    if (!isOpen || task === null) {
        return null;
    }

    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {

        if (isOpen && task && task.id)
            fetch(`${environment.API_URL}/tasks/${task.id}/comments`)
                .then(res => res.json())
                .then(apiData => setComments(apiData))
                .catch(error => console.error)

    }, [isOpen, task])

    const handleSave = () => {
        const updatedTask = {
            title,
            description,
        };

        // Call the onSave function provided by the parent component
        onSave(updatedTask);

        // Close the modal
        onClose();
    };

    function resetState() {
        setTitle(null);
        setDescription(null);
        setComments([]);
    }

    function createComment(e) {
        const commentInput = document.getElementById('create-comment-input');
        const commentText = commentInput.value.trim();

        if (!commentText) {
            console.log('Please enter the comment')
            return;
        }

        fetch(`${environment.API_URL}/tasks/${task.id}/comments`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST', body: JSON.stringify({text: commentText})
        })
            .then(res => res.json())
            .then(createdComment => {
                setComments([...comments, createdComment]);
                commentInput.value = '';
            })
            .catch(error => console.error)
    }

    return (
        <div className="update-task-modal">
            <div className="modal-content">
                <span class="material-symbols-outlined update-task-modal-close-icon" onClick={() => {
                    onClose();
                    resetState();
                }}>close</span>

                <div className="update-task-modal-label"><span>Title:</span></div>
                <input className="update-task-title"
                       type="text"
                       name="title"
                       value={task.title}
                       onInput={(e) => setTitle(e.target.value)}
                />
                <div className="update-task-modal-label"><span>Description:</span></div>
                <textarea className="update-task-description"
                          name="description"
                          value={task.description}
                          onInput={(e) => setDescription(e.target.value)}
                />

                <div>
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>

                <h1>Activity:</h1>
                <div className="activity" style="padding-left: 15px">
                    <div className="comments">
                        <div className="update-task-modal-label"><span>Comments:</span></div>
                        <div>
                            <input className="update-task-modal-input-comment" type="text" id="create-comment-input" placeholder="Add a comment"/>
                            <button className="save-button" onClick={createComment}>Add</button>
                        </div>

                        <div className="comments-list">
                            {comments.length > 0 && comments.map((c) => (
                                <div className="comment-item">{c.text}</div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default UpdateTaskModal;
