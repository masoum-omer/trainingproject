import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة الطلبات</h1><p>مراجعة طلبات التدريب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>الشركة</th><th>الفرصة</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>محمد أحمد</td><td>شركة التقنية</td><td>Full Stack Developer</td><td>مقبول</td></tr><tr><td>أحمد علي</td><td>شركة المستقبل</td><td>Backend Developer</td><td>قيد المراجعة</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
