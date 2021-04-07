import React,{useState} from 'react'
import Options from './Options'
import Question from './Question'
import TypeSelector from './TypeSelector'
import {useHistory} from 'react-router';

const CreateSurvey=({squestions,setSquestions} )=> {
    const history=useHistory();
    const getRandom = ()=>{
        return Math.floor((Math.random()*1000)+1)
    }
    const defaultOptionState=[{uid:getRandom(), value:''},{uid:getRandom(), value:''}]
    const [qText,setQtext] = useState('')
    const [qType,setQtype] = useState(0);
    const [options,setOptions] = useState(defaultOptionState);
    
    const addOption = ()=>{
        let newOption = {
            uid: getRandom(),
            value:''
        }
        let updatedOptions = [...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }
    const deleteOption =()=>{
        if(options.length===2){
            alert('you cannot delete anymore')
        }else{
        let updatedOptions = [...options];
        updatedOptions.pop()
        setOptions(updatedOptions);
        }
    }
    const updateOptionText=(id,text)=>{
        let updatedOptions = [...options];
        let changeIndex = updatedOptions.findIndex(x => x.uid === id );
        updatedOptions[changeIndex].value = text;
        setOptions(updatedOptions);
    }
    
    const updateSurveyQuestions=()=>{
        let newSurveyQuestions = [...squestions];
        let newQ = {
            qtext : qText,
            qtype: qType,
            options:options
        }
        newSurveyQuestions.push(newQ);
        setSquestions(newSurveyQuestions);
        setQtype(0);
        setQtext('');
        setOptions(defaultOptionState);
    }

    const published=()=>{
        updateSurveyQuestions();
        history.push('/published')
    }
    return (
        <div>
            <TypeSelector qType={qType} setQtype={setQtype}/>
            {qType!==0 ? 
            <>
            <Question onTextUpdate={setQtext} />
                {
                    options.map((opt,key)=>(
                        <>
                            <Options key={key} addOption={addOption} deleteOption={deleteOption} uid={opt.uid} updatedText={updateOptionText}  />
                        </>
                    ))
                }
            <button className="btn btn-primary m-1" onClick={()=>updateSurveyQuestions()} > 
                Add Question 
            </button>
            <button className="btn btn-primary m-1" onClick={()=>published()}> 
                Publish</button>
            </>
            :null}
        </div>
    )
}

export default CreateSurvey;
