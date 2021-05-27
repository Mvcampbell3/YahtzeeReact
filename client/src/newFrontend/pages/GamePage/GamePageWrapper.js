import { connect } from "react-redux";
import GamePage from "./GamePage";
import { checkState, getDiceValue } from "../../../redux/reducers";

const mapStateToProps = (state) => {
    var test = checkState(state);
    console.log(test);
    const { diceValue, diceHold } = getDiceValue(state);
    console.log(diceValue);
    return {
        diceValue,
    };
};

export default connect(mapStateToProps)(GamePage);
