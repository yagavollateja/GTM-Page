import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaRegSmile } from "react-icons/fa";
import { IoSparklesOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";

export default function Comparison() {
    const manuals =['Endless email chains','Scattered Excel tracking','Missed critical updates','Reactive firefighting']
    const storewises =['Auto amendment tracking','Smart approval alerts','Seamless ERP integration','Real-time actionable dashboards']
    return (
        <section className="container py-5">
        <div className="row g-4">
        <div className="container mt-5 pt-5">
            <h1 className="text-black text-center fw-bold">The Difference is Day and Night</h1>
        </div>
            {/* LEFT CARD - Manual Process */}
            <div className="col-md-6 p-4">
            <div className="p-5 rounded-4" style={{ backgroundColor: "#F1F5F9" }}>
                <div className="d-flex align-items-center gap-2 mb-4">
                    <FaRegSmile size={24} className="text-secondary" />
                    <h4 className="fw-bolder m-0 fa-2x">Manual Process</h4>
                </div>
                {manuals.map((manual,i)=>(
                    <ul  className="list-unstyled d-flex flex-column gap-3">
                        <li key={i} className="d-flex align-items-center gap-3">
                            <RxCross2 className="text-danger" size={20} />
                            <h5>{manual}</h5>
                        </li>
                    </ul>
                ))}
            </div>
            </div>

            {/* RIGHT CARD - Storewise AI */}
            <div className="col-md-6 p-4 ">
            <div  className="p-4 h-100 rounded-4 border border-primary" style={{ backgroundColor: "#FFFFFF" }}>
                <div className="d-flex align-items-center gap-2 mb-4 text-primary">
                    <IoSparklesOutline size={24} />
                    <h4 className="fw-bold m-0">Storewise AI Automation</h4>
                </div>
                {storewises.map((Storewise,i)=>(
                    <ul className="list-unstyled d-flex flex-column gap-3">
                        <li key={i} className="d-flex align-items-center gap-3">
                            <FiCheckCircle className="text-primary" size={20} />
                            <h5>{Storewise}</h5>
                        </li>
                    </ul>
                ))}
            </div>
            </div>

        </div>
        </section>
    );
}