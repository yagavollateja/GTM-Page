import React from 'react'
import Button from './Button'
import Image from './Image'
import HeroImg from './../assets/heroimage1.png'
import { AiOutlineSafety } from "react-icons/ai";
export default function Hero() {
    return (
        <section className="py-5 bg-white mt-5 mb-5" id="hero">
            <div className="container">
                <div className="row align-items-center p-4">
                    <div className="col-md-6">
                        <h1 className="fw-bold display-6">
                            Simplify Your <br/>
                            Purchase Order <br/>
                            Amendments — <br/>
                            From Manual Chaos <br/>
                            to AI-Controlled <br/>
                            Clarity
                        </h1>

                        <p className="text-muted mt-3">
                            Cut PO amendment turnaround time by up to 60%.
                            start <br/>with free tools.scale with AI atumation.
                        </p>

                        <div className="mt-4 d-flex gap-4">
                            <Button value="Download Free Toolkit" color="primary"/>
                            <Button value="Book Free AI Demo"/>
                        </div>
                    </div>
                    <div className="col-md-6 text-center d-flex justify-content-center align-items-center gap-2">
                        <Image url="https://img.e-xiste.com/insecure/q:80/format:webp/plain/https://storage.googleapis.com/zimo-photos/photo_9f40bafc-5fb2-4b8e-b83b-45b0b4fd8d9f.png"/>
                        <Image url="https://img.e-xiste.com/insecure/q:80/format:webp/plain/https://storage.googleapis.com/zimo-photos/photo_9f40bafc-5fb2-4b8e-b83b-45b0b4fd8d9f.png"/>
                    </div>

                </div>
                <p className="text-muted mt-3"> <AiOutlineSafety className="icon text-primary"/> Trusted by growing vendor teams.</p>
            </div>
        </section>
    )
}