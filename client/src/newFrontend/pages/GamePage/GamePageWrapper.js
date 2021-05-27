import { connect } from "react-redux";
import GamePage from "./GamePage";

const mapStateToProps = (state) => {
    console.log(state);
    return {};
};

export default connect(mapStateToProps)(GamePage);
