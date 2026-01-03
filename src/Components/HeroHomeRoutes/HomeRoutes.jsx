import React from "react";
import HeroHome from "./HeroHome/HeroHome";
import HomeBrand from "./HomeBrand/HomeBrand";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeBrandCounters from "./HomeBrandCounters/HomeBrandCounters";
import Testimonials from "./Testimonials/Testimonials";
const HomeRoutes = () => {
    return (
        <div>
            <HeroHome />
            <HomeBrand />
            <HomeProjects />
            <HomeBrandCounters />
            <Testimonials />
        </div>
    );
};
export default HomeRoutes;