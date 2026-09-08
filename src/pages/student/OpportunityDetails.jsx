import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function OpportunityDetails() {
    const { id } = useParams();
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <section className="dashboard-panel">
                    <div className="opportunity-detail-header">
                        <div className="company-logo">🏢</div>
                        <div><h1>Full Stack Developer</h1><p>شركة التقنية الحديثة · الفرصة #{id}</p></div>
                    </div>
                    <div className="detail-grid">
                        <div><span>📍 الموقع</span><strong>الخرطوم</strong></div>
                        <div><span>⏱ المدة</span><strong>3 أشهر</strong></div>
                        <div><span>💼 النوع</span><strong>تدريب تعاوني</strong></div>
                    </div>
                    <div className="detail-section"><h2>وصف الفرصة</h2><p>فرصة تدريبية في مجال تطوير تطبيقات الويب باستخدام أحدث التقنيات.</p></div>
                    <div className="detail-section"><h2>المتطلبات</h2><div className="opportunity-skills"><span>React</span><span>Laravel</span><span>MySQL</span><span>JavaScript</span></div></div>
                    <button className="profile-save-btn">التقديم على الفرصة</button>
                </section>
            </main>
        </div>
    );
}
