import {montserrat} from "@/app/ui/fonts";
import SideNav from "@/app/ui/dashboard/sidenav";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div className={"flex h-screen"}>
            <div className={"w-full flex-none md:w-64"}>
                <SideNav/>
            </div>
            <div className={"flex-grow p6 md:overflow-y-auto md:p12"}>
                {children}
            </div>
        </div>

    );
}