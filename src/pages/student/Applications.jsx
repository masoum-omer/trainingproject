import Sidebar from "../../components/Sidebar";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Applications() {
    const rows = [
        ["شركة التقنية", "Full Stack Developer", "10 أغسطس 2026", "pending"],
        ["شركة البرمجيات", "Frontend Developer", "08 أغسطس 2026", "accepted"],
        ["شركة المستقبل", "Backend Developer", "01 أغسطس 2026", "rejected"],
    ];
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الطالب</span><h1>طلبات التدريب</h1><p>متابعة جميع طلبات التقديم.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الشركة</th><th>الوظيفة</th><th>تاريخ التقديم</th><th>الحالة</th></tr></thead>
                            <tbody>{rows.map((r) => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td><StatusBadge status={r[3]} /></td></tr>)}</tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
