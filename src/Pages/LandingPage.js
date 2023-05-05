import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Compare from "../components/Hero/Compare";
import SimplePromo from "../components/Hero/SimplePromo";
import NeedHelp from "../components/Forms/NeedHelp";
import TwoChoice from "../components/Hero/TwoChoice";
import ReachTop from "../components/Hero/ReachTop";
import OurCourses from "../components/Hero/OurCourses";
import Course from "../components/Hero/Course";
import Contact from "../components/Forms/Contact";

function LandingPage() {
    return (
        <>
            <Hero />
            <Compare />
            <OurCourses />
            <SimplePromo />
            <Course />
            <TwoChoice />
            <ReachTop />
            <NeedHelp />
        </>
    );
}

export default LandingPage;
