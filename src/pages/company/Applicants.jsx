import Sidebar from "../../components/Sidebar";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Applicants() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>المتقدمون</h1><p>مراجعة طلبات الطلاب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>الفرصة</th><th>التاريخ</th><th>الحالة</th><th>الإجراء</th></tr></thead>
                            <tbody>
                                <tr><td>محمد أحمد</td><td>Full Stack Developer</td><td>10 سبتمبر</td><td><StatusBadge status="pending" /></td><td><button className="table-action">مراجعة</button></td></tr>
                                <tr><td>أحمد علي</td><td>Frontend Developer</td><td>09 سبتمبر</td><td><StatusBadge status="accepted" /></td><td><button className="table-action">عرض</button></td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
