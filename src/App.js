import React, {useState} from "react";
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
   const [posts] = useState([
      {id: 1, title: 'JavaScript', body: 'JavaScript - programming language.'},
      {id: 2, title: 'JavaScript', body: 'JavaScript - programming language.'},
      {id: 3, title: 'JavaScript', body: 'JavaScript - programming language.'}
   ])

   return (
      <div className="App">
         <form>
            <input type="text" placeholder="Post name" />
            <input type="text" placeholder="Post description" />
            <button>Create post</button>
         </form>
         <PostList posts={posts} title="Posts List"/>
      </div>
   );
}

export default App;