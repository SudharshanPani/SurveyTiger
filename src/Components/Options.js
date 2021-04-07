import React from 'react'

function Options({addOption,deleteOption,uid, updatedText}) {
    return (
        <div>
            <div className="col-md-8 offset-md-2 col-12 input-group my-3" >
                <input type="text" className="form-control" placeholder="Option Text" onChange={event=>{updatedText(uid,event.target.value)}} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>addOption()} >+</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={()=>deleteOption()} >-</button>
                </div>
            </div>
        </div>
    )
}

export default Options;
