import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Page() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>إدارة الطلاب</h1><p>عرض وإدارة الطلاب المسجلين.</p></div></div>
                <section className="dashboard-panel">
                    <div className="table-responsive">
                        <table className="dashboard-table">
                            <thead><tr><th>الاسم</th><th>الرقم الجامعي</th><th>التخصص</th><th>الحالة</th></tr></thead>
                            <tbody><tr><td>محمد أحمد</td><td>20240001</td><td>تقنية المعلومات</td><td>نشط</td></tr><tr><td>أحمد علي</td><td>20240002</td><td>علوم الحاسوب</td><td>نشط</td></tr><tr><td>سارة محمد</td><td>20240003</td><td>نظم المعلومات</td><td>متخرج</td></tr></tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    );
}
