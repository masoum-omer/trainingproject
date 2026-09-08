import { Link } from "react-router-dom";
import "../styles/components.css";

export default function OpportunityCard({
    id, company, title, location, duration, type = "تدريب تعاوني", skills = [], logo = "🏢"
}) {
    return (
        <div className="opportunity-card">
            <div className="opportunity-header">
                <div className="company-logo">{logo}</div>
                <div className="opportunity-company">
                    <h3>{company}</h3>
                    <span>{location}</span>
                </div>
            </div>
            <div className="opportunity-body">
                <h2>{title}</h2>
                <div className="opportunity-meta">
                    <span>📍 {location}</span>
                    <span>⏱ {duration}</span>
                    <span>💼 {type}</span>
                </div>
                <div className="opportunity-skills">
                    {skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
            </div>
            <div className="opportunity-footer">
                <Link to={`/student/opportunities/${id}`} className="view-opportunity">
                    عرض التفاصيل <span>←</span>
                </Link>
            </div>
        </div>
    );
}
