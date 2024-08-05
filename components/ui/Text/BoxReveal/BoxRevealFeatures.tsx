import { Button } from '@/components/ui/button';
import BoxReveal from '@/components/magicui/box-reveal';

export async function BoxRevealFeatures() {
    return (
        <div className="h-full w-full items-center justify-center overflow-hidden pt-8 ">
            <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                <p className="text-[3.5rem] font-semibold">
                    Why MineX?<span className="text-[#5046e6]">.</span>
                </p>
            </BoxReveal>

            <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                <h2 className="mt-[.5rem] text-[1rem]">
                    Digitial Transformation for <span className="text-[#5046e6]">Mining Exploration</span>
                </h2>
            </BoxReveal>

            <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                <div className="mt-[1.5rem]">
                    <p>
                        <span className="font-semibold text-[#00000]">
                            -&gt; Optimize resource allocation: Employ Google Cloud's data management tools to make informed decisions and maximize
                            your exploration budget.
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold text-[#00000]">
                            -&gt; Accelerate exploration success: Utilize Google Cloud's advanced analytics and machine learning to uncover hidden
                            mineral deposits faster.
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold text-[#00000]">
                            -&gt; Enhance investor confidence: Showcase your company's value with compelling data-backed insights powered by Google
                            Cloud.
                        </span>
                    </p>
                    <p>
                        <span className="font-semibold text-[#00000]">
                            -&gt; Mitigate risks: Leverage Google Cloud's robust security and compliance features to protect your sensitive data.
                        </span>
                    </p>
                </div>
            </BoxReveal>

            {/* <BoxReveal boxColor={'#5046e6'} duration={0.5}>
                <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
            </BoxReveal> */}
        </div>
    );
}
