import Navbar from './../components/Navbar'
import Hero from './../components/Hero'
import Service from './../components/Service'
import PoAmendments from './../components/PoAmendments'
import Comparision from './../components/Comparision'
import FinalCTA from './../components/FinalCTA'
import FinalBanner from './../components/FinalBanner'
import React from 'react'

export default function StoreWiseLandingPage() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Service/>
            <PoAmendments/>
            <Comparision/>
            <FinalCTA/>
            <FinalBanner/>
        </div>
    )
}
