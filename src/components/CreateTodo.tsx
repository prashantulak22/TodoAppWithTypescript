interface Props {
    handleAction: (e: React.FormEvent) => void;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    todo: string;
    isEditBtnActive: boolean;
}
const CreateTodo: React.FC<Props> = ({ handleAction, setTodo, todo, isEditBtnActive }) => {
    return (
        <div>
            <form onSubmit={handleAction}>
                <input required type="text" placeholder="Enter a task" value={todo} className="inputField" onChange={(e) => setTodo(e.target.value)} />

                {!isEditBtnActive ?
                    <button className="addBtn" type="submit" >Add</button> :
                    <button className="addBtn" type="submit" >Edit</button>
                }
            </form>
        </div>
    )
}

export default CreateTodo;
