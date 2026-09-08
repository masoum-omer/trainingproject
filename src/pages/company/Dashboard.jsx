import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>لوحة الشركة</span><h1>مرحباً بك، شركة التقنية 👋</h1><p>إدارة فرص التدريب والمتقدمين والمتدربين.</p></div></div>
                <div className="stats-grid">
                    <StatCard title="الفرص المنشورة" value="12" icon="💼" description="فرص نشطة" />
                    <StatCard title="المتقدمون" value="48" icon="👥" type="orange" description="طلبات جديدة" />
                    <StatCard title="المتدربون" value="16" icon="🎓" type="green" description="متدربون حاليون" />
                    <StatCard title="التقارير" value="31" icon="📄" type="purple" description="تقارير مستلمة" />
                </div>
                <section className="dashboard-panel">
                    <div className="panel-header"><div><h2>آخر المتقدمين</h2><p>طلبات تحتاج إلى مراجعة</p></div></div>
                    <div className="applications-list">
                        <div className="application-item"><div className="application-company">👨‍🎓</div><div className="application-info"><strong>محمد أحمد</strong><span>Full Stack Developer</span></div><StatusBadge status="pending" /></div>
                        <div className="application-item"><div className="application-company">👨‍🎓</div><div className="application-info"><strong>أحمد علي</strong><span>Frontend Developer</span></div><StatusBadge status="pending" /></div>
                    </div>
                </section>
            </main>
        </div>
    );
}
