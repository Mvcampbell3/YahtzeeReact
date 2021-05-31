import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Dice from "./Dice";
import { holdDice } from "../../../../redux/actions";

const mapStateToProps = (state, ownProps) => {
    const {
        dice: { hold, value, type },
    } = ownProps;
    return { hold, value, type };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ holdDice }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Dice);
