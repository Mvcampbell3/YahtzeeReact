import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GamePage from "./GamePage";
import { getDiceSettings } from "../../../redux/reducers";
import { rollDice } from "../../../redux/actions";

const mapStateToProps = (state) => {
    console.log(state);
    const {
        diceSettings: { diceArray, rollCount },
    } = getDiceSettings(state);
    return {
        diceArray,
        rollCount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ rollDice }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
