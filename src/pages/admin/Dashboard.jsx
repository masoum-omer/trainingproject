import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import "../../styles/dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>لوحة تحكم المسؤول</h1><p>نظرة عامة على بوابة التدريب.</p></div></div>
                <div className="stats-grid">
                    <StatCard title="الطلاب" value="1,240" icon="🎓" description="طلاب مسجلون" />
                    <StatCard title="الشركات" value="86" icon="🏢" type="orange" description="جهات تدريب" />
                    <StatCard title="الفرص" value="320" icon="💼" type="green" description="فرص منشورة" />
                    <StatCard title="الطلبات" value="2,840" icon="📋" type="purple" description="طلبات تدريب" />
                </div>
                <section className="dashboard-content-grid">
                    <section className="dashboard-panel"><div className="panel-header"><div><h2>طلبات معلقة</h2><p>تحتاج إلى مراجعة الإدارة</p></div></div><div className="applications-list"><div className="application-item"><div className="application-company">📋</div><div className="application-info"><strong>طلب اعتماد شركة</strong><span>شركة المستقبل</span></div></div><div className="application-item"><div className="application-company">📄</div><div className="application-info"><strong>تقرير تدريب</strong><span>محمد أحمد</span></div></div></div></section>
                    <section className="dashboard-panel"><div className="panel-header"><div><h2>نشاط النظام</h2><p>آخر العمليات</p></div></div><div className="admin-activity">✅ تم قبول طلب تدريب جديد</div><div className="admin-activity">🏢 تمت إضافة جهة تدريب جديدة</div><div className="admin-activity">📄 تم رفع تقرير جديد</div></section>
                </section>
            </main>
        </div>
    );
}
