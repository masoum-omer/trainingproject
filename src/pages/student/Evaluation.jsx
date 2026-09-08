import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Evaluation() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>التدريب</span><h1>التقييم</h1><p>تقييم التدريب الميداني.</p></div></div>
                <section className="dashboard-panel">
                    <div className="evaluation-summary">
                        <div className="evaluation-score"><strong>4.5</strong><div>⭐⭐⭐⭐⭐</div><span>من 5</span></div>
                        <div className="evaluation-info">
                            <h2>تقييم التدريب</h2><p>تم تقييم أدائك من قبل المشرف الميداني.</p>
                            <div className="evaluation-row"><span>الالتزام</span><strong>90%</strong></div>
                            <div className="evaluation-row"><span>المهارات التقنية</span><strong>95%</strong></div>
                            <div className="evaluation-row"><span>التواصل</span><strong>90%</strong></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
