import React, {Component, createRef} from "react";


class Task extends Component {
    state = {
        comments: [],
        input: "",
        currentId: 0,
        typingStatus: false
    };



    showInput = (e) => {
        this.setState({
            input: e.target.value,
            typingStatus: e.target.value ? true : false
        });
    };


    addNewComment = () => {
        const {currentId, input} = this.state;

        const newComment = {
            id: currentId + 1,
            text: input,
            status: false
        };

        this.setState((prevState) => ({
            comments: [...prevState.comments, newComment],
            currentId: prevState.currentId + 1,
            input: "",
            typingStatus: false
        }));
    };

    removeComment = (comment) => {
        const {comments} = this.state;
        const newComments = comments.filter((el) => el.id !== comment.id);

        this.setState({comments: newComments});
    };

    handleChange = (id, status) => {
        this.setState({
            comments: this.state.comments.map(task => {
                if(task.id === id){
                    return {...task, status}
                }
                return task
            })
        })
    };

    renderComments = () => (
        <div>
            <h2 className="font-bold my-2">Task:</h2>
            {this.state.comments.map((comment) => (
                <div
                    key={comment.id}
                    className={`flex my-4 py-2 px-4 text-white w-[80%] justify-between border border-gray-600 rounded items-center ${comment.status ? 'bg-green-400' : 'bg-gray-400'}`}>
                    <input
                        type="checkbox"
                        checked={comment.status}
                        onChange={() => this.handleChange(comment.id, !comment.status)}
                    />
                    <Comment
                        key={comment.id}
                        comment={comment}
                        removeComment={this.removeComment}/>
                </div>
            ))}
        </div>
    );



    render() {
        const {comments, input} = this.state;

        console.log(this.state.typingStatus);

        return (
            <div className='flex justify-center container mx-auto'>
                <div className="w-[80%] mx-auto">
                    <h1 className="text-center font-bold my-4 text-2xl">Добавить задачу</h1>
                    <input
                        value={input}
                        type="text"
                        className={`outline-0 border py-2 px-4 rounded w-[70%] ${this.state.typingStatus ? 'border-green-500': 'border-gray-600'}`}
                        placeholder='Задачи'
                        onChange={this.showInput}/>
                    <button className="ml-2 py-2 px-4 bg-red-600 text-white rounded-2xl" onClick={this.addNewComment}>Добавить новую задачу</button>
                    {!comments.length ? <p>Нету задач</p> : this.renderComments()}
                </div>
            </div>
        );
    }
}

const Comment = (props) => {
    const {comment, removeComment} = props;
    const handleRemove = () => removeComment(comment);

    return (
        <div className="flex w-[80%] justify-between items-center">
            <p className="font-bold text-xl">{comment.text}</p>
            <button className="bg-red-600 border rounded-2xl text-white py-2 px-4" onClick={handleRemove}>Удалить задачу</button>
        </div>
    );
};
export default Task;