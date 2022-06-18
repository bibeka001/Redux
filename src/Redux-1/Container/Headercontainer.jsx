import { connect } from "react-redux";
import Header from "../Components/Header";
// import { addToCart } from "../Services/Action/Action";
const mapStateToProps = state => ({
    //  cardData:state.data
    data:state.cardItems
})
const mapDispatchToProps = (dispatch) => (
    {
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;
