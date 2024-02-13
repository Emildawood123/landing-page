import Project from "./project";
import Box from "./Box";
import footBallPicture from '../imgs/pexels-pixabay-47730.jpg'
import speedPicture from '../imgs/pexels-lalesh-aldarwish-169976.jpg'
function Services(){
    return (
        <section id="services">
                <h2 className="services">Feature</h2>
                <div className="parentBox">
                    <Box roundedPic={footBallPicture} featureName="segmentation team" featureDesc="segment set of people for teams according ranks the application take you two inputs to insert number of teams and numbers of members in one team"/>
                    <Box roundedPic={speedPicture} featureName="Fast and arragned" featureDesc="just you click the teams show for you instantly and in boxes easy to understand and not complicated, enjoy you free time"/>
             </div>
        </section>
    )
}
export default Services;
