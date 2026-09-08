import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Profile() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="student" />
            <main className="dashboard-main">
                <div className="dashboard-header">
                    <div><span>الطالب</span><h1>الملف الشخصي</h1><p>إدارة معلوماتك الشخصية والأكاديمية.</p></div>
                </div>
                <section className="dashboard-panel">
                    <div className="profile-header">
                        <div className="profile-avatar">👨‍🎓</div>
                        <div><h2>محمد أحمد</h2><p>طالب - تقنية المعلومات</p></div>
                    </div>
                    <form className="profile-form">
                        <div className="profile-field"><label>الاسم الكامل</label><input defaultValue="محمد أحمد" /></div>
                        <div className="profile-field"><label>البريد الإلكتروني</label><input type="email" defaultValue="student@example.com" /></div>
                        <div className="profile-field"><label>الرقم الجامعي</label><input defaultValue="20240001" /></div>
                        <div className="profile-field"><label>التخصص</label><select defaultValue="it"><option value="it">تقنية المعلومات</option><option value="cs">علوم الحاسوب</option><option value="is">نظم المعلومات</option></select></div>
                        <div className="profile-field"><label>رقم الهاتف</label><input placeholder="أدخل رقم الهاتف" /></div>
                        <div className="profile-field"><label>المهارات</label><input placeholder="React, Laravel, MySQL..." /></div>
                        <button type="button" className="profile-save-btn">حفظ التغييرات</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
