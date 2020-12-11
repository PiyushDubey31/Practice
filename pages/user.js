import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../store/action/userAction';

function User(props) {
    return (
        <div>
            <h1>hii this is props</h1>
            {props.data&&<h1>
                {props.data[0].name}
                </h1>}
            <button onClick={()=>props.dispatch(userAction())}>Get Data</button>
       
        </div>
    );
}
const mapStateToProps = (state)=>{
    return{data:state.userData}
}

export default connect(mapStateToProps)(User);