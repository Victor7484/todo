import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import TodoList from './Containers/TodoList';
import Todo from './Containers/Todo';
import CreateTodo from './Containers/CreateTodo';
import EditTodo from './Containers/EditTodo';


const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar name="name" />
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/new" component={CreateTodo} />
        <Route exact path="/edit/:todoId" component={EditTodo} />
        <Route exact path="/:todoId" component={Todo} />
      </Switch>
    </BrowserRouter>
  </div>
);


export default App;
