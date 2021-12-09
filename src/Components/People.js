import React, { Component } from 'react'
import Profile3 from './Profile3'

export class People extends Component {
    constructor(){
        super();
        this.state={
            users: [],
            loading: false
        }
    }

    async componentDidMount() {
        let url = "https://jsonplaceholder.typicode.com/users";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({users: parsedData})
    }

    render() {
        return (
            <div>
                <div className="container my-3">
                <div className="row">
                    {this.state.users.map((element) => {
                        return <div className="col-md-4" key={element.url} >
                            <Profile3 username={element.username} email={element.email} imageUrl={`https://avatars.dicebear.com/v2/avataaars/${element.username}.svg?options[mood][]=happy`} contact={element.phone} website={element.website} />
                        </div>
                    })}
                </div>
            </div>
            </div>
        )
    }
}
export default People