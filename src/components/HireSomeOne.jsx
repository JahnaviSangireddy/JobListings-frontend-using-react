import { useState } from "react"
import { hireSomeOne } from "./JobApi"
import { Field, Form, Formik } from "formik"

export default function HireSomeOne(){

    const [profile,setProfile] = useState([])
    const [exp,setExp] = useState([])
    const [desc,setDesc] = useState([])
    const [techs,setTechs] = useState([])

    function onSubmit(values){

        const jobPost={
        profile: values.profile,
        exp: values.exp,
        desc: values.desc,
        techs: values.techs
    }

    console.log(jobPost)
    console.log(jobPost.techs)

     hireSomeOne(jobPost)
        .then(
            (response)=>{
                console.log("job posted successfully")
            }
        )
        .catch(
            (error)=>{
                console.log("could not post job! Please try again !")
            }
        )
        .finally(
            ()=>console.log("cleanup")
        )
    }

    return(
        <div className="container">
            <h1>Enter Job details</h1>
                <div>
                    <Formik initialValues={ {profile,desc,techs} }
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validateOnChange = {false}
                        validateOnBlur = {false}>
            {
                (props) => (
                    <Form>                    
                        <fieldset className="form-group">
                            <label>Profile</label>
                            <Field name="profile" type="text" className="form-control"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Experience in years</label>
                            <Field name="exp" type="text" className="form-control"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Description</label>
                            <Field name="desc" type="textarea" className="form-control"/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Skills required</label>
                            <select multiple={true} name="techs">
                                <option value="Java">Java</option>
                                <option value="Springboot">Springboot</option>
                                <option value="React">React</option>
                                <option value="Phyton">Phyton</option>
                                <option value="Javascript">Javascript</option>
                                <option value="Django">Django</option>
                                <option value="SQL">SQL</option>
                                <option value="MongoDb">MongoDb</option>
                            </select>
                        </fieldset>
                        <div>
                            <button className="btn btn-success m-5" type="submit">save</button> 
                        </div>
                    </Form>
                    )
            }  
                </Formik>     
                
                </div>
        </div>
    )
}