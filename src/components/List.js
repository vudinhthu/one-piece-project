import { Component } from 'react';
import Character from './Character';
import { createClient } from 'microcms-js-sdk';



class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layout: "grid",
            characters: []
        }
    }

    componentDidMount() {
        // Initialize Client SDK.
        const client = createClient({
            serviceDomain: process.env.SERVICE_DOMAIN, // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
            apiKey: process.env.API_KEY
        });
        client.get({
            endpoint: 'characters',
            queries: {
                fields: "image,name,japaneseName,bounty,alias,occupation",
                orders: "publishedAt"
            },
            useGlobalDraftKey: false
          })
        .then( res => {
            this.setState({ characters : res.contents });
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="md:grid md:grid-flow-row md:grid-cols-3 xl:grid-cols-4 md:grid-rows-auto gap-4 sp:flex sp:flex-col py-4">
                {this.state.characters.map( char => {
                    return (<Character key={char.id} data={char} /> )
                })}
            </div>
        );

    }
}

export default List;