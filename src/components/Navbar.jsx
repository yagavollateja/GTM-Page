import React from 'react'
import Link from './Link'
import Button from './Button'
import { LuLayers } from "react-icons/lu";
// import logo from "../assets/logo.png"

export default function Navbar() {
    const navData = ['Features','Solutions','Resources']

    return (
        <nav className="bg-white border-bottom py-3">
            <div className="container d-flex justify-content-between align-items-center">

                {/* Logo */}
                <div className="d-flex align-items-center gap-2">
                    {/* <img 
                        src="" 
                        alt="Storewise Logo"
                        style={{height:"32px", objectFit:"contain"}}
                    /> */}
                    <LuLayers size={18} className="text-primary" />
                    <h4 className="m-0 fw-bold">Storewise</h4>
                </div>

                {/* Nav Links */}
                <div className="d-flex align-items-center gap-4">
                    {navData.map((value,i)=>(
                        <Link key={i} name={value}/>
                    ))}
                    <Button value="Book Demo" color="primary"/>
                </div>

            </div>
        </nav>
    )
}