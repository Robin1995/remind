import { React } from 'react';
import { connect } from 'react-redux';
class ShowTranslate extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <section className="content--fav">
                    <h2>Favoritos</h2>
                    <ListData messages={this.props.favorites} isFav ></ListData>
                    <hr />
                    {(this.props.favoriteAdded && this.props.favorites.length > 0) && '!! El mensaje ya se encuentra en favoritos'}
                </section>
                <section className="content--list" >
                    <h2>Items</h2>
                    <ListData {...this.props} ></ListData>
                </section>
            </>
        );
    }
}
export default connect(null, null)(ShowTranslate);