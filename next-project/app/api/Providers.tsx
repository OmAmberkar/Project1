import { ImageKitProvider } from "@imagekit/next"
import { SessionProvider } from "next-auth/react"

const urlEndPoint = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
if(!urlEndPoint){
    throw new Error("Public Key is not defined");
}

export default function Providers({children}: {children: React.ReactNode}) {
    return <SessionProvider refetchInterval={5*60}>
        <ImageKitProvider urlEndpoint={urlEndPoint}>
    {children}
    </ImageKitProvider>
    </SessionProvider>;
}