import React from 'react';
import userApi from '../api/userApi';
import UserCard from './UserCard';
import userData from '../data/user.json'

const App = ({ userData }) => {
  return (
    <div>
      {userData.map(
        (user, index) => <UserCard
          key={`user-${index}`}
          name={user.userName}
          image={user.image}
          id={user.userId} />
      )}
    </div>
  )
}


// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       loading: true,
//       userData: []
//     }
//   }

//   componentDidMount() {
//     userApi().then(data => this.setState({ loading: false, userData: data }))
//   }

//   render() {
//     return this.state.loading ? <p>Loading............</p> : <div>{this.state.userData.map(
//       (user, index) =>
//     )}</div>
//   }
// }

export default App;