import React from 'react'
import Card from './Card'
import { IoMdTime } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { FaRegCheckSquare } from "react-icons/fa";
export default function Service() {
    const icons =[
        {
            name:IoMdTime,
            text:'Top 5 Time-Saving PO Amendment Hack'
        },
        {
            name:MdMailOutline,
            text:'Ready-to-use Email Templates'
        },
        {
            name:LuTableProperties,
            text:'Excel Amendment Tracker'
        },
        {
            name:FaRegCheckSquare,
            text:'Best Practices Checklist'
        }        
    ]
    return (
        <div className="contaner mt-5 p-4 h-100" id='Resources' style={{backgroundColor:"#F1F5F9"}}>
            <div className="text-center py-5 h-50">
                <h1 className="fw-bold">Start Improving Today — Zero Cost.Zero Risk. </h1>
                <p className="text-muted mt-3">Instant downloaded.Immediate workflow improvements.</p>
            </div>
            <div className="d-flex pb-5 justify-content-evenly">
                {/* <Card icon={IoMdTime} text="Top 5 Time-Saving PO Amendment Hack"/>
                <Card icon={MdMailOutline} text="Ready-to-use Email Templates"/>
                <Card icon={LuTableProperties} text="Excel Amendment Tracker"/>
                <Card icon={FaRegCheckSquare} text="Best Practices Checklist"/> */}
                {icons.map((con,i)=>(
                    <Card key={i} icon={con.name} text={con.text}/>
                ))}
            </div>
        </div>
    )
}
