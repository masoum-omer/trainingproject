import Sidebar from "../../components/Sidebar";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Training() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الطالب</span><h1>التدريب الحالي</h1><p>معلومات التدريب والمشرف الميداني.</p></div></div>
                <section className="dashboard-panel">
                    <div className="current-training">
                        <div className="training-company-logo">🏢</div>
                        <h3>شركة التقنية الحديثة</h3><p>Full Stack Developer</p>
                        <div className="training-details">
                            <div><span>المشرف الميداني</span><strong>أحمد محمد</strong></div>
                            <div><span>مدة التدريب</span><strong>3 أشهر</strong></div>
                            <div><span>البداية</span><strong>01 سبتمبر 2026</strong></div>
                            <div><span>النهاية</span><strong>30 نوفمبر 2026</strong></div>
                        </div>
                        <StatusBadge status="active" />
                    </div>
                </section>
            </main>
        </div>
    );
}
