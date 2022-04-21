import React from "react";
import SubmitData from "./SubmitData";
import ListData from "./ListData";
import { connect } from "react-redux";
import { addMessage } from "../../store/actions";
import '../../assets/styles/components/messages/DisplayMessages.scss';
class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.submitMessage = this.submitMessage.bind(this);
    }

    submitMessage(event) {
        this.props.addMessage(event);
    }
    render() {
        return (
            <><SubmitData submitMessage={($event) => this.submitMessage($event)} ></SubmitData>
                <section className="content--fav">
                    <h2>Favoritos</h2>
                    <ListData messages={this.props.favorites} isFav ></ListData>
                    <hr />
                    {(this.props.favoriteAdded && this.props.favorites.length > 0) && <span className="alert">!! El mensaje ya se encuentra en favoritos !!</span>}
                </section>
                <section className="content--list" >
                    <h2>Items</h2>
                    <ListData {...this.props} ></ListData>
                </section>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    messages: state.messages,
    favorites: state.favorites,
    favoriteAdded: state.favoriteAdded
});
const mapDispatchToProps = {
    addMessage
};
export default connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);