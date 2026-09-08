import Sidebar from "../../components/Sidebar";
import OpportunityCard from "../../components/OpportunityCard";
import "../../styles/dashboard.css";

export default function Opportunities() {
    const data = [
        { id: 1, company: "شركتك", title: "Full Stack Developer", location: "الخرطوم", duration: "3 أشهر", skills: ["React", "Laravel", "MySQL"] },
        { id: 2, company: "شركتك", title: "UI/UX Intern", location: "الخرطوم", duration: "2 أشهر", skills: ["Figma", "UX", "UI"] },
    ];
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>فرص التدريب</h1><p>إدارة الفرص التدريبية المنشورة.</p></div><a className="profile-save-btn" href="/company/opportunities/create">+ إضافة فرصة</a></div>
                <div className="opportunities-result">{data.map((item) => <OpportunityCard key={item.id} {...item} />)}</div>
            </main>
        </div>
    );
}
