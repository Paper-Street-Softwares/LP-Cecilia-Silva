import PropTypes from "prop-types";
import "../../styles/shapeDivs.css";

const shapes = {
  shape1: "custom-shape-divider-top-1727467397",
};

SectionShapeDiv.propTypes = {
  shapeColor: PropTypes.string,
  className: PropTypes.string,
  shapeDiv: PropTypes.bool,
  shapeDivWaves: PropTypes.bool,
  shapeDivWavesOpacity: PropTypes.bool,
  shapeDivWavesCurve: PropTypes.bool,
  shapeDivWavesCurveAsymmetrical: PropTypes.bool,
  shapeDivtriangule: PropTypes.bool,
  shapeDivtrianguleAsymmetrical: PropTypes.bool,
  shapeDivTilt: PropTypes.bool,
  shapeDivArrow: PropTypes.bool,
  shapeDivSplit: PropTypes.bool,
  shapeDivBook: PropTypes.bool,
  paddingtop: PropTypes.bool,
  paddingbot: PropTypes.bool,
  rotateShape: PropTypes.bool,
};

SectionShapeDiv.defaultProps = {
  shapeDiv: true,
  rotateShape: false,
};

export default function SectionShapeDiv({
  className,
  shapeDiv,
  shapeDivWaves,
  shapeDivWavesOpacity,
  shapeDivWavesCurve,
  shapeDivWavesCurveAsymmetrical,
  shapeDivtriangule,
  shapeDivtrianguleAsymmetrical,
  shapeDivTilt,
  shapeDivArrow,
  shapeDivSplit,
  shapeDivBook,
  shapeColor,
  paddingtop = false,
  paddingbot = false,
  rotateShape = false,
}) {
  const paddingTopp = paddingtop ? "pt-[64px] desktop1:pt-[96px]" : "";
  const paddingBottom = paddingbot ? "pb-[64px] desktop1:pb-[96px]" : "";
  const rotationClass = rotateShape ? "rotate-180" : "";

  // O componente deve ser chamado na próxima Sessão e inserida
  // no início dela para interligar a Sessão anterior.
  // Ao utilizar os shapes, chame ele dentro do SectionArea 
  // e verifique se há necessidade de remover o padding do 
  // SectionArea na Sessão, e se precisa adicionar o padding do 
  // proprio shapeDiv para afstar o conteúdo adequadamente.

  return (
    shapeDiv && (
      <div
        className={`${className} ${paddingTopp} ${paddingBottom} relative h-auto w-full`}
      >
        {shapeDivWaves && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className={`${rotationClass}`}
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivWavesOpacity && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                 className={`fill-current ${shapeColor}`}
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                 className={`fill-current ${shapeColor}`}
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivWavesCurve && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivWavesCurveAsymmetrical && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivtriangule && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivtrianguleAsymmetrical && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 892.25 114.72 1200 0z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivTilt && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivArrow && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              
            >
              <path
                d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
                className={`fill-current ${shapeColor} hidden tablet1:flex`}
              ></path>
              <path
                d="M700 0L400 0 600 80 800 0z"
                className={`fill-current ${shapeColor} tablet1:hidden`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivSplit && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <rect x="1200" height="3.6"></rect>
              <rect height="3.6"></rect>
              <path
                d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}

        {shapeDivBook && (
          <div className={`${shapes.shape1}`}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
                 className={`fill-current ${shapeColor}`}
              ></path>
            </svg>
          </div>
        )}
      </div>
    )
  );
}
