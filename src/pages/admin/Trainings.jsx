import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة التدريبات</h1><p>متابعة حالات التدريب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>الشركة</th><th>البداية</th><th>النهاية</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>محمد أحمد</td><td>شركة التقنية</td><td>01 سبتمبر</td><td>30 نوفمبر</td><td>نشط</td></tr><tr><td>أحمد علي</td><td>شركة المستقبل</td><td>15 أغسطس</td><td>15 نوفمبر</td><td>نشط</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
