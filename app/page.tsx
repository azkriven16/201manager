import { auth } from "@/auth";
import { SignIn } from "@/components/auth/signin-button";

export default async function Page() {
    const session = await auth();

    if (!session)
        return (
            <div>
                <SignIn />
            </div>
        );

    return (
        <div>
            <img src={session?.user?.image!} alt="User Avatar" />
        </div>
    );
}
