import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import CreateTodo from './components/CreateTodo';
import TodoTable from './components/TodoTable';
import { Todo } from './Model';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from './redux/actions/Actions';
import { useSelector, RootStateOrAny } from 'react-redux';


const App: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [todo, setTodo] = useState<string>("");
  const [selectedData, setSelectedData] = useState<Todo>({} as Todo);
  const userId = useSelector((state: RootStateOrAny) => state.authReducer.userId);

  const postData = () => {
    axios.post(`https://614a90aa07549f001755a94e.mockapi.io/todolist`, {
      todo,
      userId
    }).then(() => {
      getData();
    }).then(() => setTodo(""))

  }
  const editData = () => {
    axios.put(`https://614a90aa07549f001755a94e.mockapi.io/todolist/${selectedData.id}`, {
      todo,
    }).then(() => {
      getData();
    }).then(() => {
      setTodo("");
      setSelectedData({} as Todo)
    })

  }

  const [APIData, setAPIData] = useState<Todo[]>([]);
  useEffect(() => {
    axios.get(`https://614a90aa07549f001755a94e.mockapi.io/todolist`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, []);


  const handleUpdate = (data: Todo) => {
    setSelectedData(data)
    setTodo(data.todo)

  }


  const onDelete = (id: number) => {
    axios.delete(`https://614a90aa07549f001755a94e.mockapi.io/todolist/${id}`)
      .then(() => {
        getData();
      })
  };

  const getData = () => {
    axios.get(`https://614a90aa07549f001755a94e.mockapi.io/todolist`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }


  const handleAction = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedData.id) {
      return editData();
    }
    else {
      return postData();
    }

  }
  const handleLogout = () => {
    dispatch(logOut());
    history.push("/login")
  }

  return (
    <div>
      <button className="logoutBtn" onClick={handleLogout}>Logout</button>

      <h2 className="main-header"> Todo List </h2>
      <div className="main">
        <CreateTodo setTodo={setTodo} todo={todo} isEditBtnActive={selectedData.id ? true : false} handleAction={handleAction} />
        <TodoTable APIData={APIData} handleUpdate={handleUpdate} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
