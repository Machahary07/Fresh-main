// components/Hero.tsx
import { JSX } from "preact";

export function Hero() {
    return (
        <section className="h-screen bg-[hsl(0,0%,80%)] flex items-center justify-center">
            <div class="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 2xl:px-24">

                <h1 className="text-[150px] font-extrabold bg-[hsl(0,0%,100%)] bg-clip-text text-transparent mb-6
        flex items-center justify-center">
                    Design Your Own Destiny
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto flex items-center justify-center">
                    Creating beautiful digital experiences that leave a lasting impression
                </p>

            </div>

        </section>
    );
}