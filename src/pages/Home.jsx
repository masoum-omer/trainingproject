import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <main>

                {/* Hero Section */}
                <section className="hero">

                    <div className="container hero-content">

                        <div className="hero-text">

                            <span className="hero-badge">
                                بوابة التدريب التعاوني والميداني
                            </span>

                            <h1>
                                ابدأ رحلتك المهنية
                                <br />
                                من هنا
                            </h1>

                            <p>
                                منصة تربط طلاب الكلية بفرص التدريب
                                في الشركات والمؤسسات، وتساعد على متابعة
                                التدريب والتقارير والتقييمات.
                            </p>

                            <div className="hero-buttons">

                                <Link
                                    to="/training"
                                    className="primary-btn"
                                >
                                    استعرض فرص التدريب
                                </Link>

                                <Link
                                    to="/register"
                                    className="secondary-btn"
                                >
                                    إنشاء حساب
                                </Link>

                            </div>

                        </div>

                        <div className="hero-image">

                            <div className="hero-card">

                                <div className="icon">
                                    🎓
                                </div>

                                <h3>
                                    مستقبلك يبدأ بتجربة
                                </h3>

                                <p>
                                    ابحث عن فرصة التدريب المناسبة
                                    لتخصصك.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                {/* Features */}
                <section className="features">

                    <div className="container">

                        <div className="section-title">

                            <span>
                                خدمات المنصة
                            </span>

                            <h2>
                                كل ما تحتاجه في مكان واحد
                            </h2>

                            <p>
                                نظام متكامل لإدارة التدريب التعاوني
                                والميداني.
                            </p>

                        </div>


                        <div className="features-grid">

                            <div className="feature-card">

                                <div className="feature-icon">
                                    🎓
                                </div>

                                <h3>
                                    للطلاب
                                </h3>

                                <p>
                                    ابحث عن فرص التدريب، قدم عليها،
                                    وتابع حالة طلبك وتقارير التدريب.
                                </p>

                            </div>


                            <div className="feature-card">

                                <div className="feature-icon">
                                    🏢
                                </div>

                                <h3>
                                    للشركات
                                </h3>

                                <p>
                                    أضف فرص التدريب واستقبل طلبات
                                    الطلاب وتابع المتدربين.
                                </p>

                            </div>


                            <div className="feature-card">

                                <div className="feature-icon">
                                    📊
                                </div>

                                <h3>
                                    وحدة التدريب
                                </h3>

                                <p>
                                    إدارة الطلاب والشركات والفرص
                                    والتقارير والتقييمات.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </main>
        </>
    );
}

export default Home;