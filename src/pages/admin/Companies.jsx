import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة الشركات</h1><p>عرض وإدارة جهات التدريب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الشركة</th><th>البريد</th><th>المدينة</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>شركة التقنية</td><td>company@tech.com</td><td>الخرطوم</td><td>نشطة</td></tr><tr><td>شركة المستقبل</td><td>info@future.com</td><td>أم درمان</td><td>قيد المراجعة</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
