import { useEffect, useState } from "react"
import { getAllJobs } from "./JobApi"


export default function ListJobs(){

    useEffect( ()=>getAllJobPosts(),[] )
    
    const [jobs , setJobs] = useState([])

    function getAllJobPosts(){
        getAllJobs()
        .then(
            (response)=> {
                console.log(response)
                setJobs(response.data)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
        .finally(
            ()=>console.log("cleanup")
        )
    }
    return(
        <div>
        {
            jobs.map(
                job=>(
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{job.profile}</h5>
                        </div>
                        <p className="mb-1"><h6>Job description :</h6>{job.desc}</p>
                        <p className="mb-1"><h6>Experience required :</h6>{job.exp}</p>
                        <p className="mb-1"><h6>Skills required :</h6>{job.techs && job.techs.join(' , ')}</p>        
                        </a> 
                    </div>
                )
            )
        }   
        </div>
    )
}