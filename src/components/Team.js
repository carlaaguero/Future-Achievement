import "./TeamStyles.css"
import TeamData from "./TeamData"
import TEAM1 from "../assets/team-1.png"
import TEAM2 from "../assets/team-2.png"
import TEAM3 from "../assets/team-3.png"


function Team() {
    return (
        <div className="team">
            <h1>Meet Our Expert Team</h1>
            <p>Discover Our Expertise in Project Development and Strategic Consulting</p>
            <div className="teamcard">
                <TeamData 
                image={TEAM1}
                heading="The Projectors"
                text="A team of projectors consists of a group of specialists in various fields, for the planning and development of business projects or strategic plans for engineering projects and their execution, in accordance with local, regional, and international practices. Additionally, we rely on a number of specialists from our allies and partners to ensure success within the project's scope. We always strive to provide quality solutions, based on the required specifications outlined in the project documents. Furthermore, some of our specialists will be recruited to implement and develop various solutions within the project's scope."
                />
                <TeamData 
                image={TEAM2}
                heading="The Main Consultant"
                text="Professional Background: An experienced developer with over 15 years of experience in governmental or private sectors, serving as a chairman or executive director for multiple private companies, founder of a group of national engineering brands. Holds a Bachelor's degree in Civil Engineering, with several managerial and leadership roles in governmental or private sectors.Project Management: In the field of project development, pivotal in establishing several companies and projects, with numerous contributions in training and educational programs. A skilled expert in five strategic axes of Vision 2020 and Vision 2030 for the Kingdom."
                />
                <TeamData 
                image={TEAM3}
                heading="Project Development Consultant"
                text="Professional Background: A seasoned developer with over 7 years of experience, working as a business development consultant in several private companies. Holds a Master's degree in Project Management with distinction, and a Bachelor's degree in the same field. Specialized in project management and developmental engineering programs for governmental infrastructure projects, working on strategic programs in light of regulations, structures, and organizational arrangements for various government-affiliated companies, as well as private enterprises. Certified as a Project Management Professional (PMP) and holds accredited product certificates."
                />
            </div>
        </div>
    )
}

export default Team