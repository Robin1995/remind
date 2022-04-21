import React from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite, removeMessage } from "../../store/actions";
import "../../assets/styles/components/messages/ListData.scss";
const STYLES = {
    textAlign: 'start',
    fontSize: 16
}
class ListData extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
        this.handleAddFavorite = this.handleAddFavorite.bind(this);
    }
    handleRemoveFavorite(event) {
        this.props.removeFavorite(event);
    }
    handleRemove(event) {
        this.props.removeMessage(event);
    }
    handleAddFavorite(event) {
        this.props.addFavorite(event);
    }
    render() {
        return (
            <ol style={STYLES}>
                {
                    this.props.messages.map((message, i) =>
                        <li key={i}>
                            {!this.props.isFav ?
                                (<><span className="item"
                                    onClick={() => this.handleRemove(i)} >
                                    ❎
                                </span>
                                    <span className="item"
                                        onClick={() => this.handleAddFavorite(message)} >
                                        💚
                                    </span>
                                </>) : (
                                    <span className="item"
                                        onClick={() => this.handleRemoveFavorite(i)} >
                                        ❎
                                    </span>
                                )}
                            {message}
                        </li>)
                }
            </ol>
        )
    }
}

const mapDispatchToProps = {
    removeMessage,
    addFavorite,
    removeFavorite
};
export default connect(null, mapDispatchToProps)(ListData);