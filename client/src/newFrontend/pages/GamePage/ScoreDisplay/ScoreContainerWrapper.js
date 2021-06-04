import { connect } from "react-redux";
import ScoreContainer from "./ScoreContainer";
import { getGameSettings } from "../../../../redux/reducers";

const mapStateToProps = (state) => {
    const { gameSettings } = getGameSettings(state);
    const { scoring } = gameSettings;
    return { scoring };
};

export default connect(mapStateToProps)(ScoreContainer);
