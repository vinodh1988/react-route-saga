import {connect} from 'react-redux';
import QuoteShow from '../ReduxComponents/QuoteShow';

export default connect((state:any)=>{
    return {
        message: state.messageData.message,
        by: state.messageData.by
    }
},null)(QuoteShow)