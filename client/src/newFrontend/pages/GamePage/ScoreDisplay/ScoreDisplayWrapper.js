import { connect } from "react-redux";
import { ScoreDisplay } from ".";
import { getDiceSettings } from "../../../../redux/reducers";
import { checkScore } from "../../../../redux/actions";
import { bindActionCreators } from "redux";

const mapStateToProps = (state, ownProps) => {
    const { diceSettings } = getDiceSettings(state);
    const { diceArray } = diceSettings;
    return { diceArray, ...ownProps };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkScore }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreDisplay);
