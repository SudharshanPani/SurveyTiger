import React from 'react'

function TypeSelector({qType,setQtype}) {
    return (
        <div>
            <div className="col-md-6 offset-md-3 col-12" >
                <select className="custom-select" value={qType} onChange={e=>{let type = parseInt(e.target.value); setQtype(type)}}>
                    <option value="0">Choose Question Type</option>
                    <option value="1">Multi-Select</option>
                    <option value="2">Single-Select</option>
                </select>
            </div>
        </div>
    )
}

export default TypeSelector
