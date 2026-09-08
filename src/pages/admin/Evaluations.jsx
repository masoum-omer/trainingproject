import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة التقييمات</h1><p>مراجعة تقييمات المتدربين.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الطالب</th><th>الشركة</th><th>الدرجة</th><th>التاريخ</th></tr></thead>
                            <tbody><tr><td>محمد أحمد</td><td>شركة التقنية</td><td>4.5 / 5</td><td>30 نوفمبر</td></tr><tr><td>أحمد علي</td><td>شركة المستقبل</td><td>4.2 / 5</td><td>28 نوفمبر</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
