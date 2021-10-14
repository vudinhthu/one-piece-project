import { Component } from 'react';
import {Card, CardBody, CardImage} from '@material-tailwind/react';

class Character extends Component {
    constructor(props) {
        super(props),
        this.state = {}
    }
    render() {
        return (
            <Card className="mt-10 md:mt5">
                <CardImage src={this.props.data.image.url} alt={this.props.data.name}/>
                <CardBody className="text-center">
                    <div className="text-center flex flex-col">
                        <h3 className="name text-2xl" >{this.props.data.name}</h3>
                        <span className="japanese-name">{this.props.data.japaneseName}</span>
                        <span className="bounty">{this.props.data.bounty}</span>
                        <span className="alias">{this.props.data.alias}</span>
                        <span className="occupations">{this.props.data.occupation.map(oc => (oc.name)).join()}</span>
                    </div>
                </CardBody>
            </Card>
        )
    }
}

export default Character