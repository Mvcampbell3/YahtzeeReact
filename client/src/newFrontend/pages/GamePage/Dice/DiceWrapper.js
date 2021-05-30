import { connect } from "react-redux";
import Dice from "./Dice";

const mapStateToProps = (state, ownProps) => {
    const {
        dice: { hold, value, type },
    } = ownProps;
    return { hold, value, type };
};

export default connect(mapStateToProps)(Dice);
