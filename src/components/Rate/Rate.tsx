import { RatePropsType } from "./rate.type";

const Rate: React.FC<RatePropsType> = ({ rate }): React.ReactNode => {
  return (
    <>
      {Array(Math.floor(rate))
        .fill(0)
        .map((_, index) => (
          <span key={index}>⭐</span>
        ))}
      {Array(5 - Math.floor(rate))
        .fill(0)
        .map((_, index) => (
          <span
            key={index}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(98%) sepia(1%) saturate(1255%) hue-rotate(79deg) brightness(117%) contrast(86%)",
            }}
          >
            ⭐
          </span>
        ))}
    </>
  );
};

export default Rate;
