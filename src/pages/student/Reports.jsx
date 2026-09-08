import Sidebar from "../../components/Sidebar";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Reports() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>التدريب</span><h1>تقارير التدريب</h1><p>رفع ومتابعة تقارير التدريب الأسبوعية.</p></div></div>
                <section className="dashboard-panel">
                    <button className="profile-save-btn">+ رفع تقرير جديد</button>
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>التقرير</th><th>التاريخ</th><th>الحالة</th></tr></thead>
                            <tbody>
                                <tr><td>التقرير الأسبوعي الأول</td><td>07 سبتمبر 2026</td><td><StatusBadge status="accepted" /></td></tr>
                                <tr><td>التقرير الأسبوعي الثاني</td><td>14 سبتمبر 2026</td><td><StatusBadge status="pending" /></td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
