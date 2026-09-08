import Sidebar from "../../components/Sidebar";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Trainees() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>المتدربون</h1><p>متابعة الطلاب المقبولين في التدريب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>التخصص</th><th>البداية</th><th>النهاية</th><th>الحالة</th></tr></thead>
                            <tbody>
                                <tr><td>محمد أحمد</td><td>تقنية المعلومات</td><td>01 سبتمبر</td><td>30 نوفمبر</td><td><StatusBadge status="active" /></td></tr>
                                <tr><td>أحمد علي</td><td>علوم الحاسوب</td><td>15 أغسطس</td><td>15 نوفمبر</td><td><StatusBadge status="active" /></td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
