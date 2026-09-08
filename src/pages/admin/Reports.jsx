import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة التقارير</h1><p>مراجعة التقارير المرفوعة.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>التقرير</th><th>التاريخ</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>محمد أحمد</td><td>التقرير الأسبوعي 1</td><td>07 سبتمبر</td><td>معتمد</td></tr><tr><td>أحمد علي</td><td>التقرير الأسبوعي 2</td><td>10 سبتمبر</td><td>قيد المراجعة</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
