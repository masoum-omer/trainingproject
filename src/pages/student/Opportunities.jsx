import Sidebar from "../../components/Sidebar";
import OpportunityCard from "../../components/OpportunityCard";
import "../../styles/dashboard.css";
import "../../styles/opportunities.css";

export default function Opportunities() {
    const opportunities = [
        { id: 1, company: "شركة التقنية", title: "Full Stack Developer", location: "الخرطوم", duration: "3 أشهر", skills: ["React", "Laravel", "MySQL"] },
        { id: 2, company: "شركة البرمجيات", title: "Frontend Developer", location: "الخرطوم", duration: "4 أشهر", skills: ["HTML", "CSS", "JavaScript"] },
        { id: 3, company: "شركة المستقبل", title: "Backend Developer", location: "أم درمان", duration: "3 أشهر", skills: ["PHP", "Laravel", "MySQL"] },
    ];
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <div><span>الفرص</span><h1>فرص التدريب</h1><p>ابحث عن فرصة التدريب المناسبة لتخصصك.</p></div>
                </div>
                <div className="search-panel">
                    <div className="search-input">🔍<input placeholder="ابحث عن تخصص أو شركة..." /></div>
                    <select><option>كل التخصصات</option><option>تقنية المعلومات</option><option>علوم الحاسوب</option><option>نظم المعلومات</option></select>
                    <select><option>كل المدن</option><option>الخرطوم</option><option>أم درمان</option><option>بحري</option></select>
                    <button>بحث</button>
                </div>
                <div className="opportunities-result">
                    {opportunities.map((item) => <OpportunityCard key={item.id} {...item} />)}
                </div>
            </main>
        </div>
    );
}
