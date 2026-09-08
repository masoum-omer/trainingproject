import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Profile() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>ملف الشركة</h1><p>إدارة بيانات جهة التدريب.</p></div></div>
                <section className="dashboard-panel">
                    <div className="profile-header"><div className="profile-avatar">🏢</div><div><h2>شركة التقنية الحديثة</h2><p>جهة تدريب</p></div></div>
                    <form className="profile-form">
                        <div className="profile-field"><label>اسم الشركة</label><input defaultValue="شركة التقنية الحديثة" /></div>
                        <div className="profile-field"><label>البريد الإلكتروني</label><input defaultValue="company@example.com" /></div>
                        <div className="profile-field"><label>الهاتف</label><input defaultValue="0912345678" /></div>
                        <div className="profile-field"><label>المدينة</label><select defaultValue="kh"><option value="kh">الخرطوم</option><option value="om">أم درمان</option><option value="bh">بحري</option></select></div>
                        <div className="profile-field"><label>نبذة</label><textarea defaultValue="شركة متخصصة في تطوير البرمجيات." /></div>
                        <button type="button" className="profile-save-btn">حفظ التغييرات</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
