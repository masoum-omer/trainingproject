import "../styles/components.css";

export default function StatCard({ title, value, icon, description, type = "blue" }) {
    return (
        <div className={`stat-card stat-${type}`}>
            <div className="stat-card-top">
                <div className="stat-icon">{icon}</div>
                <div className="stat-content">
                    <span>{title}</span>
                    <strong>{value}</strong>
                </div>
            </div>
            {description && <div className="stat-description">{description}</div>}
        </div>
    );
}
