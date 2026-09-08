import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function CreateOpportunity() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>إضافة فرصة تدريب</h1><p>أدخل تفاصيل الفرصة الجديدة.</p></div></div>
                <section className="dashboard-panel">
                    <form className="profile-form">
                        <div className="profile-field"><label>عنوان الفرصة</label><input placeholder="مثال: Full Stack Developer" /></div>
                        <div className="profile-field"><label>التخصص</label><select defaultValue=""><option value="" disabled>اختر التخصص</option><option>تقنية المعلومات</option><option>علوم الحاسوب</option><option>نظم المعلومات</option></select></div>
                        <div className="profile-field"><label>المدينة</label><input placeholder="الخرطوم" /></div>
                        <div className="profile-field"><label>مدة التدريب</label><input placeholder="3 أشهر" /></div>
                        <div className="profile-field"><label>المتطلبات والمهارات</label><input placeholder="React, Laravel, MySQL" /></div>
                        <div className="profile-field"><label>الوصف</label><textarea placeholder="اكتب وصف الفرصة..." /></div>
                        <button type="button" className="profile-save-btn">نشر الفرصة</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
