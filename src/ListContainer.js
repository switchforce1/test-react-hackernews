import {connect} from 'react-redux'
import NewsList from "./NewsList";


const mapStateToProps = (state) => {
    return {type : state.type, start : state.start, limit: state.limit }
};

const mapDispatchToProps = (dispatch) => {
    return  {
        handleType: (action) => {
            const type = { type : action.type, start : action.start, limit: action.limit };
            dispatch(type);
        }
    }
};

/**
 *const c = connect(mapStateToProps)
 *export default c(ButtonIncDec)
 * <=> 
 * export default connect(mapStateToProps)(ButtonIncDec)
 */

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)