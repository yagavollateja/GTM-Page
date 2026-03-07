import React from 'react'
import { IoWarningOutline } from "react-icons/io5";
import { LuPackageX } from "react-icons/lu";
export default function PoAmbedments() {
    return (
        <section id='Solutionso'>
            <div className="text-white mt-3 p-5" style={{backgroundColor:"#0B1B2B"}}>
                <div className="container mt-5">
                    <h1 className="text-white text-center fw-bold">What Manual PO Amendments Are Really Costing You</h1>
                </div>
                <div className="d-flex justify-content-evenly mt-5">
                    <div className="text-center">
                        <h1 className="fa-3x">6-10</h1>
                        <h5>Hourse lost per week</h5>
                    </div>
                    <div className="text-center">
                        <h1 className="fa-3x">240+</h1>
                        <h5>Hourse lost per year</h5>
                    </div>
                    <div className="text-center">
                        <IoWarningOutline className="fa-4x"/>
                        <h5>Hourse lost per week</h5>
                    </div>
                    <div className="text-center">
                        <LuPackageX className="fa-4x"/>
                        <h5>Hourse lost per week</h5>
                    </div>                                               
                </div>
                <div className="container mt-5 p-5">
                    <h4 className="text-white text-center">The longer your stay manual,the more operational time your lose.</h4>
                </div>
            </div>
        </section>
    )
}
