import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <style>{`
                .animated-breadcrumb-bg {
                    background: linear-gradient(135deg, #1a2728 0%, #293e40 40%, var(--primary-color) 80%, #1a2728 100%);
                    background-size: 300% 300%;
                    animation: panGradient 12s ease infinite;
                }
                .page-title .animated-breadcrumb-bg:before {
                    display: none !important;
                }
                @keyframes panGradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
            <section className="page-title centred">
                <div className="bg-layer animated-breadcrumb-bg"></div>
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: 'url(/assets/images/shape/shape-18.png)' }}></div>
                    <div className="pattern-2" style={{ backgroundImage: 'url(/assets/images/shape/shape-17.png)' }}></div>
                </div>
                <div className="auto-container">
                <div className="content-box">
                        <h1>{breadcrumbTitle}</h1>
                        <ul className="bread-crumb clearfix">
                            <li><Link href="/">Home</Link></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
