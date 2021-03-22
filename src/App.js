
import './App.css'
import NavBar from './components/NavBar';
import Body from './components/Body'
import { Component } from 'react';
import YTSearch from 'youtube-api-search'
import {HashRouter,useHistory,Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'


class App extends Component {
  constructor(){
    super()
    this.state={
        videos:[],
        initialVideo:'',
        redirect:'/home',
        user:''
    }
}


componentDidMount(){
   this.getVideoSearched('kgf')
   
}
getVideoSearched=(paraterm)=>{
    var dummyThis=this
    console.log('this is getVideoSearched function and the paraterm is '+paraterm)
    YTSearch({term:paraterm,key:'AIzaSyCdQ2IjHFWShvwpTw1fVOj3yWGY5sw0Hpg'},function(videos){
        dummyThis.setState({videos:videos}) 
        dummyThis.setState({initialVideo:videos[0].id.videoId})
    })
}
changeInitialVideo=(paraInitialVideo)=>{
  var dummyThis=this
  dummyThis.setState({initialVideo:paraInitialVideo})
}
  render(){
    return (
      <div className="App">
      <HashRouter>  
      <Route path='/youtube' Component={App}>
      <NavBar videoSearchFunction={this.getVideoSearched} />
      <Body videosArray={this.state.videos} initialVideo={this.state.initialVideo} setInitialVideo={this.changeInitialVideo}/>
     </Route>

      <Route path="/login" Component={Login}>
      <Login  />
      </Route>

     </HashRouter>
      </div>
    );

  }
  
}

export default App;
