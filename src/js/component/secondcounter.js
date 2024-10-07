import React from 'react';
import Digits from './digits';


const SecondCounter = (props) => {
    
    return (<div className="d-flex bg-black d-block m-3 row justify-content-center text-center">
        <div className="digitBox col-2 ">
            <i className="far fa-clock pt-3"></i>
        </div>
        <div className="digitBox col-1 ">
            <Digits digit={props.digone} />
        </div>
        <div className="digitBox col-1"><Digits digit={props.digtwo} />
        </div>
        <div className="digitBox col-1">
            <Digits digit={props.digthree} />
        </div>
        <div className="digitBox col-1">
            <Digits digit={props.digfour} />
        </div>
        <div className="digitBox col-1">
            <Digits digit={props.digfive} />
        </div>
        <div className="digitBox col-1">
            <Digits digit={props.digsix} />
        </div>

    </div>)
}
export default SecondCounter;