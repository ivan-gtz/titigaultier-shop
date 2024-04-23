import { FooterOld, SlideOverCart,Footer, Sidebar, TopMenu } from "@/components";
import { SidebarPro } from "@/components/ui/sidebar/Sidebar-pro";
export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen pt-13 mt-14">
            <TopMenu />
            <Sidebar />
            {/* <SidebarPro /> */}
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