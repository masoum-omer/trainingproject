import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import "../../styles/dashboard.css";

export default function Statistics() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="admin" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الإدارة</span><h1>الإحصائيات والتقارير</h1><p>مؤشرات عامة عن نظام التدريب.</p></div></div>
                <div className="stats-grid">
                    <StatCard title="نسبة القبول" value="68%" icon="✅" type="green" />
                    <StatCard title="فرص نشطة" value="210" icon="💼" />
                    <StatCard title="تدريبات مكتملة" value="158" icon="🎓" type="purple" />
                    <StatCard title="تقارير هذا الشهر" value="486" icon="📄" type="orange" />
                </div>
                <section className="dashboard-panel">
                    <h2>مؤشرات الأداء</h2>
                    <div className="progress-list">
                        <div><span>إكمال التدريب</span><strong>82%</strong><div className="progress"><i style={{width:"82%"}} /></div></div>
                        <div><span>رضا الطلاب</span><strong>91%</strong><div className="progress"><i style={{width:"91%"}} /></div></div>
                        <div><span>رضا الشركات</span><strong>88%</strong><div className="progress"><i style={{width:"88%"}} /></div></div>
                    </div>
                </section>
            </main>
        </div>
    );
}
