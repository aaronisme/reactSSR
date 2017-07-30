import React from 'react';
import 'isomorphic-fetch';
import UserCard from './UserCard';
import userData from '../data/user.json'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      loading: false,
      userData: []
    }
  }

  componentDidMount() {
    this.setState({laoding: true})
    fetch('//localhost:8080/api').then(
      (response) => {
        if (response.status >= 400) {
          throw ('fetch erro')
        }

        return response.json()
      }
    ).then(data => this.setState({ loading: false, userData: data }))
  }

  render() {
    return this.state.loading ? <p>Loading............</p> : <div>{this.state.userData.map(
      (user, index) => <UserCard
        key={`user-${index}`}
        name={user.userName}
        image={user.image}
        id={user.userId} />
    )}</div>
  }
}

export default App;