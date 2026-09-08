import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة فرص التدريب</h1><p>إدارة الفرص المنشورة.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الفرصة</th><th>الشركة</th><th>المدينة</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>Full Stack Developer</td><td>شركة التقنية</td><td>الخرطوم</td><td>نشطة</td></tr><tr><td>Frontend Developer</td><td>شركة البرمجيات</td><td>الخرطوم</td><td>نشطة</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
