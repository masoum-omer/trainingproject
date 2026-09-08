import Sidebar from "../../components/Sidebar";
import "../../styles/dashboard.css";

export default function Evaluation() {
    return (
        <div className="dashboard-layout">
            <Sidebar role="company" />
            <main className="dashboard-main">
                <div className="dashboard-header"><div><span>الشركة</span><h1>تقييم المتدربين</h1><p>إضافة ومراجعة تقييمات الطلاب.</p></div></div>
                <section className="dashboard-panel">
                    <form className="profile-form">
                        <div className="profile-field"><label>الطالب</label><select defaultValue="m"><option value="m">محمد أحمد</option><option value="a">أحمد علي</option></select></div>
                        <div className="profile-field"><label>الالتزام</label><input type="number" min="0" max="100" defaultValue="90" /></div>
                        <div className="profile-field"><label>المهارات التقنية</label><input type="number" min="0" max="100" defaultValue="95" /></div>
                        <div className="profile-field"><label>التواصل</label><input type="number" min="0" max="100" defaultValue="90" /></div>
                        <div className="profile-field"><label>الملاحظات</label><textarea placeholder="أضف ملاحظات المشرف..." /></div>
                        <button type="button" className="profile-save-btn">حفظ التقييم</button>
                    </form>
                </section>
            </main>
        </div>
    );
}
