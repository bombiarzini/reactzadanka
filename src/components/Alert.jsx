import { ReactNode } from "react"; 
import PropTypes from 'prop-types';





const Alert = ({ children, type="danger", classname="" }) => { 
 return(
<div className={`alert alert-${type} ${classname}`.trim()}>
    {children}
    </div>
    );
}; 

Alert.propTypes={
    children: PropTypes.node,
    type: PropTypes.oneOf(["primary","secondary","success","danger","warning"])
}

export default Alert;