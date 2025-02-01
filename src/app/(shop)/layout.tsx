import { FooterOld, SlideOverCart, Footer, Sidebar, TopMenu } from "@/components";
export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="layout-wrapper">
            <header className="sticky top-0 z-40">
                <TopMenu />
            </header>
            <main>
                <Sidebar />
                <SlideOverCart />
                {/* <div className="px-2 sm:px-10"> */}
                <div>
                    {children}
                </div>
            </main>
            <Footer />
            {/* <FooterOld /> */}
        </div>
    );
}