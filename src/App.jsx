import { BrowserRouter as Router, Route } from 'react-router-dom';
import MemoAdd from './pages/MemoAdd';
import MemoEdit from './pages/MemoEdit';
import MemoList from './pages/MemoList';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MemoList}></Route>
      <Route path="/add" component={MemoAdd}></Route>
      <Route path="/edit/:memoId" component={MemoEdit}></Route>
    </Router>
  );
}

export default App;
