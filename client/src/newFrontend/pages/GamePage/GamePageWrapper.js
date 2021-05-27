import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GamePage from "./GamePage";
import { getDiceValue } from "../../../redux/reducers";
import { rollDice } from "../../../redux/actions";

const mapStateToProps = (state) => {
    const { diceValue, diceHold } = getDiceValue(state);
    return {
        diceValue,
        diceHold,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ rollDice }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
