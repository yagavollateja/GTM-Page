import React from "react";

export default function FinalBanner() {
    return (
        <section
        className="py-5 text-center"
        style={{ backgroundColor: "#ffffff" }}
        >
        <div className="container py-5">

            {/* Heading */}
            <h1
            className="fw-bold mb-5"
            style={{
                fontSize: "48px",
                color: "#111827",
                lineHeight: "1.2"
            }}
            >
            Take Control of Your PO <br />
            Amendments Today.
            </h1>

            {/* Buttons */}
            <div className="d-flex justify-content-center gap-4 flex-wrap">

            <button
                className="btn btn-light border px-4 py-3"
                style={{
                minWidth: "220px",
                fontWeight: "500"
                }}
            >
                Download Free Toolkit
            </button>

            <button
                className="btn btn-primary px-4 py-3"
                style={{
                minWidth: "220px",
                fontWeight: "500"
                }}
            >
                Book Free Demo
            </button>

            </div>

        </div>
        </section>
    );
}