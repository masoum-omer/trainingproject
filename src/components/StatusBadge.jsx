import "../styles/components.css";

export default function StatusBadge({ status }) {
    const data = {
        pending: ["قيد المراجعة", "status-pending"],
        accepted: ["مقبول", "status-accepted"],
        rejected: ["مرفوض", "status-rejected"],
        completed: ["مكتمل", "status-completed"],
        active: ["نشط", "status-active"],
        cancelled: ["ملغي", "status-rejected"],
    };
    const [text, cls] = data[String(status || "").toLowerCase()] || [status, "status-pending"];
    return <span className={`status-badge ${cls}`}><span className="status-dot" />{text}</span>;
}
