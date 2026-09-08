import Sidebar from "../../components/Sidebar";
import StatCard from "../../components/StatCard";
import OpportunityCard from "../../components/OpportunityCard";
import StatusBadge from "../../components/StatusBadge";
import "../../styles/dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <div>
                        <span>لوحة الطالب</span>
                        <h1>مرحباً بك، محمد 👋</h1>
                        <p>تابع فرص التدريب وطلباتك وتقاريرك من مكان واحد.</p>
                    </div>
                    <button className="notification-btn">🔔<span>3</span></button>
                </div>

                <div className="stats-grid">
                    <StatCard title="فرص التدريب" value="24" icon="💼" description="فرص متاحة حالياً" />
                    <StatCard title="طلبات التقديم" value="5" icon="📋" type="orange" description="إجمالي الطلبات" />
                    <StatCard title="طلبات مقبولة" value="2" icon="✅" type="green" description="تم قبولها" />
                    <StatCard title="التقارير" value="8" icon="📄" type="purple" description="تقارير التدريب" />
                </div>

                <div className="dashboard-content-grid">
                    <section className="dashboard-panel">
                        <div className="panel-header">
                            <div><h2>آخر طلبات التدريب</h2><p>آخر الطلبات التي قمت بتقديمها</p></div>
                            <a href="/student/applications">عرض الكل</a>
                        </div>
                        <div className="applications-list">
                            {[
                                ["شركة التقنية", "Full Stack Developer", "pending"],
                                ["شركة البرمجيات", "Frontend Developer", "accepted"],
                                ["شركة المستقبل", "Software Engineer", "rejected"],
                            ].map(([company, position, status]) => (
                                <div className="application-item" key={company}>
                                    <div className="application-company">🏢</div>
                                    <div className="application-info"><strong>{company}</strong><span>{position}</span></div>
                                    <StatusBadge status={status} />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="dashboard-panel">
                        <div className="panel-header">
                            <div><h2>التدريب الحالي</h2><p>معلومات تدريبك الحالي</p></div>
                        </div>
                        <div className="current-training">
                            <div className="training-company-logo">🏢</div>
                            <h3>شركة التقنية الحديثة</h3>
                            <p>Full Stack Developer</p>
                            <div className="training-details">
                                <div><span>البداية</span><strong>01 سبتمبر 2026</strong></div>
                                <div><span>النهاية</span><strong>30 نوفمبر 2026</strong></div>
                            </div>
                            <StatusBadge status="active" />
                        </div>
                    </section>
                </div>

                <section className="dashboard-section">
                    <div className="section-heading">
                        <div><span>فرص مقترحة</span><h2>فرص تدريب مناسبة لك</h2></div>
                        <a href="/student/opportunities">عرض جميع الفرص ←</a>
                    </div>
                    <div className="dashboard-opportunities">
                        <OpportunityCard id={1} company="شركة التقنية" title="Full Stack Developer" location="الخرطوم" duration="3 أشهر" skills={["React", "Laravel", "MySQL"]} />
                        <OpportunityCard id={2} company="شركة البرمجيات" title="Frontend Developer" location="الخرطوم" duration="4 أشهر" skills={["React", "JavaScript", "CSS"]} />
                        <OpportunityCard id={3} company="شركة المستقبل" title="Backend Developer" location="أم درمان" duration="3 أشهر" skills={["PHP", "Laravel", "MySQL"]} />
                    </div>
                </section>
            </main>
        </div>
    );
}
