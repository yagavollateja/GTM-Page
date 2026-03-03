import React from "react";
import { FiCheck } from "react-icons/fi";
import Dashboard from './../assets/dashboard.png'
export default function FinalCTA() {
    return (
        <section className="py-5 px-5 mt-5" style={{ backgroundColor: "#F1F5F9" }}>
        <div className="row align-items-center g-5" >

            {/* LEFT CONTENT */}
            <div className="col-md-6">

            <h1 className="fw-bold mb-4">
                Ready to Eliminate Manual <br /> Work Completely?
            </h1>

            {/* Features List */}
            <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
                <li className="d-flex align-items-center gap-3">
                <FiCheck className="text-primary" size={20} />
                AI-powered amendment tracking
                </li>

                <li className="d-flex align-items-center gap-3">
                <FiCheck className="text-primary" size={20} />
                ERP & inventory integration
                </li>

                <li className="d-flex align-items-center gap-3">
                <FiCheck className="text-primary" size={20} />
                Predictive operational alerts
                </li>

                <li className="d-flex align-items-center gap-3">
                <FiCheck className="text-primary" size={20} />
                Real-time analytics & reporting
                </li>
            </ul>

            {/* Testimonial Card */}
            <div
                className="p-4 rounded-4 mb-4"
                style={{ backgroundColor: "#F3F4F6" }}
            >
                <p className="mb-3 text-muted">
                "Cut our PO amendment turnaround by 60% with minimal effort.
                The visibility we have now is a game-changer for the entire team."
                </p>

                <div className="d-flex align-items-center gap-3">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                    className="rounded-circle"
                    width="45"
                    height="45"
                />
                <div>
                    <strong>David S.</strong>
                    <div className="text-muted small">Vendor Manager</div>
                </div>
                </div>
            </div>

            {/* CTA Button */}
            <button className="btn btn-primary active btn-lg px-4">
                Book Your Free Live Demo
            </button>

            <p className="text-muted mt-3 small">
                Limited onboarding slots available this quarter.
            </p>

            </div>

            {/* RIGHT IMAGE */}
            <div className=" container col-md-6 text-center bg-secondary pt-2 pb-2 rounded ">
                <div className="container p-2">
                    <img
                    src={Dashboard}
                    alt="Dashboard Preview"
                    className="card-img rounded w-100"
                />
                </div>
            </div>

        </div>
        </section>
    );
}