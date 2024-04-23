import { FooterOld, SlideOverCart,Footer, Sidebar, TopMenu } from "@/components";
export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <Sidebar />
            <SlideOverCart />
            {/* <div className="px-2 sm:px-10"> */}
            <div>
                { children }
            </div>
            <Footer />
            {/* <FooterOld /> */}
        </main>
    );
}