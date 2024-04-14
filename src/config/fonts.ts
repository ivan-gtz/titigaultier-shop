import { Inter, Montserrat_Alternates, IBM_Plex_Sans } from "next/font/google";


export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['500', '700'], 
});

export const parFont = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})