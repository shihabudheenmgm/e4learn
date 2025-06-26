import { BgType } from "@/types/context";

const bannerbg = ({ bgimage }: BgType) => {
    return (
        <>
            <figure
                className="bannerbg"
                style={{
                    backgroundImage: `url(${bgimage})`,
                    backgroundSize: "50%",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                }}></figure>
        </>
    );
};

export default bannerbg;
