// https://react-svgr.com/playground/ to cover svg to components
// public/images/svgs

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      //se: React.DetailedHTMLProps<React.SVGAttributes<SVGElement>, SVGElement>
      set: React.SVGProps<SVGElement>;
    }
  }
}

export const CopyIcon = ({
  className = "",
  copied,
  ...rest
}: {
  className: string;
  copied: boolean;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...rest}
    className={`pointer-events-none h-4 w-4 ${className} ${
      copied ? "text-green-400" : "text-gray-400 dark:text-gray-400"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      className={` ${copied ? "hidden" : "block"}`}
    />

    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
      className={` ${copied ? "block" : "hidden"}`}
    />
  </svg>
);

export const MailToIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h20v20H0z" />
    <g fill="currentColor">
      =
      <path d="M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
      <path d="m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
    </g>
  </svg>
);

export const GithubIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const LinkedInIcon = ({
  className = "",
  ...rest
}: {
  className: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="none">
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1080}
    height={1080}
    viewBox="0 0 810 810"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M356.474 723.824c-8.082-1.18-14.156-4.04-18.219-8.578-4.062-4.543-5.597-10.196-4.61-16.954.993-6.773 4.079-11.75 9.267-14.937 5.187-3.18 11.824-4.18 19.906-3l15.39 2.25 2.766-18.875 8.906 1.297-9.11 62.344Zm5.484-35.688c-5.632-.824-10.113-.25-13.437 1.719-3.32 1.976-5.313 5.223-5.969 9.734-.656 4.508.324 8.18 2.938 11.016 2.617 2.844 6.742 4.676 12.375 5.5l15.125 2.219 4.093-27.97ZM277.471 685.753l39.407-41.64c3.562-3.895 6.964-6.317 10.203-7.266 3.242-.945 6.664-.781 10.265.5a20.944 20.944 0 0 1 6.032 3.36c1.812 1.437 3.156 3.077 4.03 4.921l-5.655 4.844c-1.54-3.02-3.836-5.078-6.891-6.172-1.969-.695-3.8-.758-5.5-.187-1.695.562-3.535 1.93-5.516 4.093l-2.562 2.625 3.828 51.922-8.469-3.015-2.86-41.563-28.343 30.422ZM265.83 628.19c1.637-.363 3.415-.36 5.329.016a19.346 19.346 0 0 1 5.484 1.984c4.219 2.262 6.883 5.156 7.985 8.687 1.105 3.52.523 7.395-1.75 11.625l-12.391 23.079 7.14 3.828-3.359 6.265-7.14-3.828-4.938 9.203-7.61-4.093 4.938-9.204-12.047-6.453 3.36-6.265 12.047 6.453 12.218-22.75c1.219-2.281 1.59-4.328 1.11-6.14-.477-1.821-1.774-3.305-3.891-4.454-2.32-1.238-4.66-1.64-7.016-1.203ZM212.852 645.674c-4.782-3.719-7.5-8.062-8.157-13.031-.664-4.957 1.086-10.11 5.25-15.453l16.86-21.672 6.828 5.312-16.25 20.875c-2.844 3.649-4.102 7.07-3.781 10.282.312 3.207 2.101 6.082 5.36 8.625 3.698 2.875 7.452 4.062 11.265 3.562 3.804-.492 7.273-2.746 10.406-6.765l15.078-19.391 6.813 5.297-41.016 52.703-6.813-5.297 15.86-20.39c-2.813.687-5.754.632-8.828-.157-3.082-.793-6.04-2.293-8.875-4.5ZM207.07 572.69c3.074 3.605 5.039 7.531 5.89 11.781.844 4.242.56 8.367-.859 12.375-1.414 4.008-3.906 7.535-7.469 10.578-3.562 3.04-7.437 4.946-11.625 5.719-4.187.781-8.296.406-12.328-1.125-4.03-1.531-7.582-4.102-10.656-7.703-3.082-3.606-5.05-7.508-5.906-11.703-.852-4.196-.57-8.301.844-12.313 1.418-4.02 3.906-7.55 7.468-10.594 3.563-3.039 7.438-4.945 11.625-5.718 4.188-.77 8.305-.41 12.344 1.078 4.031 1.48 7.59 4.023 10.672 7.625Zm-5.75 4.922c-1.988-2.32-4.313-3.953-6.969-4.89-2.656-.938-5.398-1.099-8.234-.485-2.832.605-5.504 1.976-8.016 4.11-2.508 2.148-4.285 4.573-5.328 7.28-1.039 2.711-1.297 5.438-.766 8.188.524 2.742 1.778 5.27 3.766 7.594 1.98 2.32 4.29 3.957 6.922 4.906 2.637.957 5.383 1.144 8.234.562 2.844-.586 5.524-1.949 8.032-4.093 2.511-2.137 4.28-4.57 5.312-7.297 1.023-2.739 1.281-5.489.781-8.25-.508-2.758-1.754-5.301-3.734-7.625ZM133.046 550.331c-2.926-5.312-3.711-10.379-2.36-15.203 1.356-4.82 5-8.867 10.938-12.14l24.047-13.25 4.156 7.562-23.172 12.766c-4.039 2.242-6.55 4.898-7.531 7.968-.977 3.063-.469 6.407 1.531 10.032 2.262 4.093 5.242 6.668 8.938 7.718 3.687 1.051 7.765.352 12.234-2.109l21.516-11.86 4.172 7.563-41.782 23.031-4-7.25 6.313-3.484c-2.988-.336-5.781-1.48-8.375-3.438-2.594-1.957-4.8-4.593-6.625-7.906ZM92.254 491.845l-4.984-26.078c-1.25-6.54-1.063-12.594.562-18.157 1.625-5.562 4.516-10.187 8.672-13.875 4.148-3.695 9.258-6.125 15.328-7.28 6.063-1.157 11.703-.782 16.922 1.124 5.219 1.899 9.61 5.133 13.172 9.703 3.562 4.575 5.969 10.133 7.219 16.672l4.984 26.078Zm49.313-35.89c-.958-5.009-2.77-9.227-5.438-12.657-2.676-3.438-5.96-5.848-9.86-7.234-3.906-1.395-8.156-1.657-12.75-.782-4.593.875-8.445 2.684-11.562 5.422-3.125 2.73-5.289 6.184-6.5 10.36-1.219 4.168-1.348 8.757-.39 13.765l3.187 16.703 46.5-8.875ZM121.666 370.848c.656.023 1.527.109 2.61.265l-1.282 38.672c4.219-.406 7.656-2.14 10.312-5.203 2.649-3.062 4.047-6.93 4.204-11.61.187-5.695-1.583-10.343-5.313-13.937l5.734-4.578c2.45 2.242 4.282 4.984 5.5 8.234 1.22 3.243 1.758 6.84 1.625 10.797-.168 5.043-1.351 9.48-3.546 13.313-2.208 3.824-5.204 6.742-8.985 8.75-3.781 2-8.008 2.93-12.687 2.781-4.625-.156-8.758-1.328-12.407-3.516-3.656-2.195-6.457-5.14-8.406-8.828-1.945-3.695-2.844-7.828-2.687-12.39.148-4.563 1.312-8.586 3.5-12.078 2.187-3.5 5.172-6.192 8.953-8.079 3.781-1.882 8.074-2.75 12.875-2.593Zm-18.047 23c-.145 4.136 1 7.64 3.437 10.515 2.43 2.867 5.668 4.606 9.72 5.219l1.015-30.562c-4.031.335-7.364 1.855-10 4.562-2.645 2.7-4.035 6.121-4.172 10.266ZM108.937 313.988l42.203 30.532-1.859 8.609-51.062 10.313 1.906-8.797L141 346.738l-33.844-24.468ZM151.61 272.99c.605.25 1.386.64 2.343 1.172l-14.86 35.734c4.087 1.117 7.907.71 11.47-1.219 3.562-1.937 6.242-5.062 8.047-9.375 2.187-5.258 2.175-10.238-.032-14.937l6.97-2.266c1.5 2.969 2.241 6.188 2.233 9.656-.011 3.461-.777 7.016-2.296 10.672-1.938 4.657-4.61 8.39-8.016 11.203-3.406 2.813-7.234 4.493-11.484 5.032-4.258.543-8.547-.086-12.86-1.891-4.27-1.77-7.722-4.32-10.36-7.656-2.644-3.344-4.226-7.086-4.75-11.235-.519-4.156.095-8.336 1.845-12.546 1.75-4.22 4.273-7.57 7.562-10.063 3.281-2.5 7.027-3.96 11.234-4.39 4.2-.438 8.516.265 12.954 2.109Zm-25.016 15.14c-1.582 3.813-1.742 7.496-.484 11.047 1.25 3.543 3.664 6.32 7.234 8.328l11.75-28.25c-3.883-1.101-7.54-.859-10.969.735-3.426 1.594-5.937 4.308-7.531 8.14ZM120.409 241.927l4.39-7.453 57.579 33.828-4.391 7.453ZM201.417 242.067c-2.961 3.718-6.438 6.402-10.438 8.047-4 1.648-8.101 2.156-12.312 1.53-4.207-.632-8.14-2.405-11.797-5.312-3.664-2.914-6.281-6.351-7.844-10.312-1.562-3.969-1.976-8.078-1.25-12.328.73-4.25 2.574-8.235 5.531-11.953 2.95-3.707 6.403-6.38 10.36-8.016 3.96-1.645 8.043-2.148 12.25-1.516 4.219.625 8.16 2.399 11.828 5.313 3.656 2.906 6.258 6.344 7.812 10.312 1.563 3.961 2 8.063 1.313 12.313-.688 4.242-2.508 8.215-5.453 11.922Zm-5.906-4.719c1.894-2.383 3.046-4.961 3.453-7.734.414-2.782.05-5.504-1.094-8.172-1.137-2.676-2.992-5.04-5.563-7.094-2.585-2.063-5.308-3.344-8.171-3.844-2.852-.508-5.579-.242-8.172.797-2.594 1.043-4.836 2.758-6.735 5.14-1.906 2.407-3.078 4.993-3.515 7.75-.438 2.762-.094 5.485 1.03 8.173 1.126 2.687 2.981 5.062 5.563 7.125 2.575 2.054 5.297 3.324 8.172 3.812 2.875.492 5.618.227 8.235-.797 2.625-1.031 4.89-2.75 6.797-5.156ZM209.124 165.259c3.543-2.957 7.367-4.828 11.484-5.61 4.125-.78 8.149-.425 12.079 1.063 3.937 1.492 7.441 4.078 10.515 7.765 3.07 3.68 5 7.594 5.781 11.75.782 4.157.415 8.196-1.093 12.11-1.5 3.918-4.024 7.355-7.563 10.312-2.637 2.188-5.469 3.688-8.5 4.5-3.023.813-6.101.887-9.234.22l15.797 18.92-6.64 5.532-41.767-50.015 6.36-5.313 4.844 5.813a18.305 18.305 0 0 1 1.765-9.25c1.399-2.938 3.453-5.536 6.172-7.797Zm25.813 32.03c2.343-1.956 3.992-4.253 4.953-6.89.968-2.644 1.172-5.398.61-8.265-.556-2.864-1.884-5.555-3.985-8.078-2.117-2.54-4.532-4.336-7.25-5.391-2.719-1.05-5.453-1.328-8.203-.828-2.75.5-5.297 1.73-7.641 3.687-2.3 1.93-3.93 4.215-4.89 6.86-.97 2.636-1.188 5.375-.657 8.218.531 2.836 1.856 5.524 3.969 8.063 2.105 2.523 4.504 4.32 7.203 5.39 2.707 1.075 5.457 1.368 8.25.876 2.789-.5 5.336-1.711 7.64-3.641ZM290.432 142.858c.313.574.672 1.367 1.078 2.375l-34.03 18.422c2.476 3.437 5.706 5.531 9.687 6.281 3.988.742 8.039-.004 12.156-2.234 5.008-2.719 8.129-6.594 9.36-11.625l6.859 2.64c-.7 3.243-2.149 6.211-4.344 8.907-2.188 2.687-5.024 4.976-8.5 6.859-4.438 2.398-8.871 3.617-13.297 3.656-4.418.031-8.45-1.078-12.094-3.328-3.633-2.258-6.566-5.445-8.797-9.562-2.195-4.063-3.27-8.22-3.218-12.47.043-4.257 1.168-8.163 3.375-11.718 2.21-3.55 5.32-6.414 9.328-8.594 4.008-2.164 8.078-3.187 12.203-3.062s7.953 1.344 11.484 3.656c3.54 2.313 6.457 5.578 8.75 9.797Zm-28.968-3.984c-3.637 1.968-6.079 4.73-7.329 8.28-1.257 3.556-1.128 7.231.391 11.032l26.906-14.562c-2.343-3.301-5.351-5.41-9.015-6.328-3.657-.915-7.309-.391-10.953 1.578ZM303.167 121.505c.5-3.101 1.894-5.82 4.187-8.156 2.3-2.344 5.43-4.211 9.39-5.61l2.782 7.907c-.469.105-1.105.293-1.906.562-4.406 1.563-7.406 4.106-9 7.625-1.594 3.524-1.531 7.711.187 12.563l7.89 22.422-8.155 2.875-15.86-44.985 7.813-2.75ZM364.017 147.25c-1.668.261-3.183-.094-4.546-1.063-1.368-.977-2.188-2.352-2.47-4.125-.273-1.719.087-3.25 1.079-4.594 1-1.351 2.332-2.16 4-2.422 1.656-.258 3.133.086 4.437 1.031 1.313.95 2.11 2.313 2.391 4.094.281 1.774-.07 3.336-1.047 4.688-.969 1.343-2.25 2.14-3.844 2.39ZM419.168 144.603c-4.73-.274-9.258-1.262-13.578-2.97-4.324-1.718-7.672-3.816-10.047-6.296l3.703-6.828c2.282 2.293 5.254 4.219 8.922 5.781a34.179 34.179 0 0 0 11.438 2.672c5.207.293 9.148-.375 11.828-2 2.676-1.625 4.097-3.906 4.265-6.844.114-2.156-.496-3.945-1.828-5.375-1.324-1.426-3-2.55-5.031-3.375-2.031-.832-4.914-1.804-8.64-2.922-4.669-1.406-8.419-2.757-11.25-4.062-2.837-1.301-5.227-3.192-7.172-5.672-1.938-2.477-2.793-5.723-2.563-9.734.188-3.364 1.238-6.344 3.156-8.938 1.926-2.594 4.727-4.598 8.407-6.016 3.687-1.425 8.195-1.988 13.53-1.687 3.708.21 7.333.898 10.876 2.062 3.539 1.157 6.55 2.704 9.031 4.641l-3.375 7.031a32.583 32.583 0 0 0-8.234-4.28c-2.938-1.04-5.844-1.642-8.72-1.798-5.093-.281-8.964.434-11.608 2.14-2.649 1.712-4.055 4.032-4.22 6.97-.124 2.148.489 3.937 1.845 5.375 1.363 1.43 3.085 2.578 5.171 3.453 2.094.867 4.938 1.82 8.532 2.86 4.664 1.405 8.406 2.76 11.218 4.062 2.813 1.293 5.188 3.168 7.125 5.625 1.946 2.449 2.805 5.652 2.579 9.609-.18 3.293-1.247 6.25-3.204 8.875-1.96 2.617-4.812 4.617-8.562 6-3.742 1.383-8.274 1.93-13.594 1.64ZM469.012 152.08c-4.594-1.167-8.465-3.242-11.61-6.218-3.136-2.969-5.28-6.5-6.437-10.594-1.148-4.101-1.14-8.422.016-12.953 1.156-4.54 3.219-8.332 6.187-11.375 2.977-3.05 6.551-5.113 10.719-6.188 4.176-1.082 8.563-1.039 13.156.125 4.594 1.18 8.453 3.235 11.578 6.172 3.125 2.938 5.258 6.461 6.407 10.563 1.156 4.094 1.156 8.414 0 12.953-1.157 4.531-3.227 8.32-6.203 11.36-2.97 3.05-6.532 5.132-10.688 6.25-4.156 1.113-8.531 1.081-13.125-.094Zm1.875-7.328c2.957.758 5.79.754 8.5-.015 2.707-.77 5.047-2.223 7.016-4.36 1.968-2.132 3.359-4.796 4.172-7.984.812-3.195.863-6.203.156-9.016-.711-2.812-2.074-5.187-4.094-7.125-2.012-1.937-4.496-3.285-7.453-4.046-2.969-.75-5.805-.754-8.5-.016-2.7.73-5.047 2.164-7.047 4.297-1.992 2.125-3.39 4.789-4.203 7.984-.813 3.188-.856 6.196-.125 9.016.738 2.812 2.11 5.21 4.11 7.187 2.007 1.97 4.5 3.328 7.468 4.078ZM539.188 112.631c-4.75-2.02-8.215-.468-10.391 4.657l-1.625 3.812 12.75 5.422-2.781 6.547-12.578-5.344-15.875 37.36-7.953-3.376 15.875-37.359-7.47-3.172 2.782-6.547 7.469 3.172 1.656-3.89c1.852-4.364 4.586-7.274 8.203-8.735 3.625-1.457 7.727-1.21 12.313.735 1.757.75 3.316 1.68 4.672 2.78 1.363 1.095 2.421 2.29 3.171 3.579l-4.984 5.031c-1.23-2.156-2.977-3.71-5.234-4.672ZM549.827 183.617c-1.636.313-3.402.254-5.296-.171a19.6 19.6 0 0 1-5.438-2.125c-4.156-2.375-6.742-5.34-7.75-8.891-1.012-3.555-.324-7.41 2.063-11.578l13.015-22.735-7.031-4.03 3.531-6.157 7.031 4.031 5.188-9.062 7.5 4.28-5.188 9.063 11.86 6.797-3.531 6.157-11.86-6.797-12.828 22.422c-1.293 2.242-1.727 4.273-1.297 6.109.438 1.844 1.703 3.363 3.797 4.562 2.281 1.313 4.602 1.782 6.969 1.407ZM638.482 199.142l-44.906 24-6.203-5.485 13.593-36.25-34.39 17.922-6.219-5.469 18.234-47.5 6.141 5.422-14.703 37.64 35.906-18.968 5.469 4.828-14.625 37.953 35.89-19.218ZM655.608 224.106c3.812 5.375 5.414 10.426 4.812 15.157-.605 4.738-3.527 8.972-8.765 12.703l-23.47 16.672-4.75-6.672 5.142-3.64c-2.649.1-5.227-.595-7.735-2.095-2.5-1.5-4.808-3.742-6.922-6.718-3.093-4.356-4.515-8.59-4.265-12.703.25-4.106 2.082-7.368 5.5-9.797 3.425-2.438 7.062-3.145 10.906-2.125 3.851 1.011 7.707 4.23 11.562 9.656l7.922 11.14 1.39-.984c3.032-2.156 4.727-4.687 5.095-7.594.375-2.898-.657-6.062-3.094-9.5a25.201 25.201 0 0 0-5.938-5.937c-2.324-1.664-4.656-2.8-7-3.406l3.204-6.688c3.039.867 5.976 2.387 8.812 4.563 2.832 2.18 5.363 4.836 7.594 7.968Zm-35.406 22.72c1.914 2.694 4.164 4.597 6.75 5.702 2.582 1.102 5.285 1.313 8.109.625l5.422-3.86-7.703-10.843c-4.243-5.969-8.368-7.531-12.375-4.687-1.95 1.382-2.95 3.234-3 5.547-.055 2.32.879 4.828 2.797 7.515ZM672.546 268.282c3.133.117 6.004 1.168 8.61 3.156 2.601 1.988 4.843 4.863 6.718 8.625l-7.484 3.735c-.156-.461-.422-1.063-.797-1.813-2.094-4.188-4.992-6.855-8.687-8-3.688-1.148-7.84-.57-12.453 1.734l-21.266 10.594-3.844-7.734 42.688-21.281 3.687 7.406ZM682.869 341.356c-.625.195-1.47.398-2.532.61l-11.61-36.923c-3.843 1.782-6.51 4.555-8 8.329-1.491 3.77-1.53 7.882-.124 12.343 1.707 5.438 4.914 9.239 9.625 11.407l-3.875 6.234c-3.063-1.313-5.703-3.297-7.922-5.953-2.219-2.656-3.93-5.875-5.125-9.656-1.512-4.813-1.867-9.391-1.062-13.735.8-4.344 2.656-8.09 5.562-11.234 2.914-3.149 6.61-5.422 11.078-6.828 4.406-1.383 8.692-1.649 12.86-.797 4.164.855 7.78 2.699 10.843 5.531 3.07 2.844 5.29 6.441 6.657 10.797 1.375 4.351 1.609 8.539.703 12.562-.907 4.02-2.836 7.551-5.782 10.594-2.949 3.04-6.714 5.281-11.296 6.719Zm9.406-27.688c-1.242-3.949-3.48-6.875-6.719-8.78-3.242-1.907-6.871-2.477-10.89-1.704l9.171 29.188c3.688-1.668 6.328-4.215 7.922-7.641 1.594-3.418 1.766-7.106.516-11.063ZM673.63 422.437l-7.828.188-1.11-45.703 62.985-1.532 1.078 44.438-7.828.187-.86-35.437-19.359.469.766 31.578-7.64.187-.766-31.578-20.328.5ZM707.675 463.335c-1.106 5.957-3.711 10.367-7.813 13.234-4.105 2.863-9.492 3.676-16.156 2.438l-26.984-5.016 1.578-8.484 26 4.828c4.55.851 8.176.398 10.875-1.36 2.707-1.75 4.437-4.656 5.187-8.718.852-4.606.188-8.485-2-11.641-2.187-3.156-5.793-5.203-10.812-6.14l-24.14-4.485 1.577-8.5 46.906 8.719-1.515 8.14-7.094-1.312c2.102 2.156 3.535 4.812 4.297 7.969.758 3.164.79 6.609.094 10.328ZM680.467 543.598l-38.046-15.859c-7.696-3.219-12.586-7.508-14.672-12.86-2.094-5.343-1.555-11.812 1.609-19.406 1.73-4.156 3.95-7.886 6.656-11.187 2.711-3.293 5.602-5.656 8.672-7.094l4.547 6.39c-2.625 1.302-5.078 3.25-7.36 5.845a31.131 31.131 0 0 0-5.437 8.703c-2.156 5.156-2.523 9.472-1.11 12.953 1.407 3.476 4.602 6.254 9.579 8.328l3.5 1.469a19.142 19.142 0 0 1-2.219-9.078c.012-3.22.688-6.434 2.031-9.641 1.75-4.2 4.235-7.633 7.454-10.297 3.218-2.656 6.847-4.281 10.89-4.875 4.05-.586 8.156-.008 12.313 1.734 4.156 1.727 7.445 4.235 9.875 7.516 2.437 3.29 3.828 7.008 4.172 11.156.351 4.157-.344 8.332-2.094 12.532-1.399 3.32-3.297 6.156-5.703 8.5-2.407 2.351-5.184 3.94-8.328 4.765l6.828 2.844Zm-25.656-37.609c-1.195 2.875-1.664 5.711-1.406 8.516.25 2.812 1.2 5.32 2.844 7.53 1.644 2.22 3.851 3.907 6.625 5.063 4.27 1.77 8.304 1.797 12.109.079 3.8-1.72 6.629-4.797 8.484-9.235 1.875-4.492 2.082-8.7.625-12.625-1.449-3.918-4.308-6.762-8.578-8.531-2.773-1.156-5.523-1.543-8.25-1.156-2.73.382-5.183 1.472-7.36 3.265-2.167 1.79-3.862 4.157-5.093 7.094ZM670.685 559.845l-4.484 7.39-40.813-24.703 4.485-7.39Zm5.594 8.453c.875-1.438 2.062-2.352 3.562-2.734 1.5-.387 2.91-.18 4.235.625 1.332.812 2.187 1.976 2.562 3.5.383 1.52.141 3-.734 4.437-.867 1.438-2.04 2.36-3.516 2.766-1.468.406-2.875.207-4.218-.594-1.387-.844-2.266-2.031-2.641-3.563-.367-1.523-.117-3 .75-4.437ZM640.429 603.32c-3.875 4.664-8.305 7.25-13.282 7.75-4.976.5-10.078-1.414-15.297-5.735l-21.125-17.531 5.516-6.656 20.36 16.89c3.562 2.946 6.949 4.317 10.156 4.11 3.218-.211 6.144-1.906 8.781-5.094 2.988-3.605 4.297-7.32 3.922-11.14-.375-3.825-2.528-7.36-6.453-10.61L614.1 559.617l5.516-6.657 36.719 30.453-5.281 6.375-5.547-4.593c.781 2.906.734 5.925-.14 9.062-.876 3.133-2.524 6.156-4.938 9.063ZM564.72 639.915c-.414-.512-.914-1.226-1.5-2.14l30.109-24.313c-3.055-2.918-6.602-4.383-10.656-4.39-4.063-.012-7.91 1.453-11.547 4.39-4.438 3.582-6.801 7.961-7.094 13.14l-7.203-1.343c.094-3.324.977-6.508 2.64-9.547 1.657-3.043 4.028-5.809 7.11-8.297 3.93-3.168 8.059-5.172 12.39-6.015 4.337-.836 8.497-.477 12.485 1.078 4 1.562 7.469 4.16 10.406 7.797 2.906 3.601 4.723 7.5 5.453 11.687.727 4.195.328 8.238-1.203 12.125-1.523 3.895-4.054 7.273-7.594 10.14-3.554 2.864-7.367 4.614-11.437 5.25-4.082.633-8.078.133-11.984-1.5-3.907-1.636-7.364-4.324-10.375-8.062Zm29.203-1.36c3.218-2.593 5.117-5.75 5.703-9.468.594-3.719-.203-7.312-2.39-10.781l-23.798 19.219c2.899 2.82 6.23 4.347 10 4.578 3.762.238 7.254-.946 10.485-3.547ZM517.64 665.716c-.312-.574-.672-1.367-1.078-2.375l34.14-18.234c-2.457-3.45-5.675-5.559-9.656-6.328-3.988-.762-8.047-.043-12.172 2.156-5.02 2.687-8.16 6.547-9.421 11.578l-6.829-2.672c.72-3.242 2.184-6.203 4.391-8.89 2.211-2.68 5.059-4.95 8.547-6.813 4.45-2.375 8.883-3.57 13.297-3.578 4.418 0 8.445 1.133 12.078 3.406 3.625 2.281 6.539 5.484 8.75 9.61 2.176 4.081 3.223 8.25 3.14 12.5-.074 4.257-1.218 8.156-3.437 11.687-2.219 3.539-5.344 6.39-9.375 8.547-4.02 2.144-8.094 3.144-12.219 3-4.125-.149-7.945-1.39-11.468-3.735-3.532-2.335-6.426-5.62-8.688-9.859Zm28.938 4.156c3.648-1.949 6.101-4.695 7.375-8.234 1.28-3.543 1.175-7.227-.313-11.047l-26.984 14.422c2.304 3.3 5.289 5.422 8.953 6.36 3.656.945 7.312.445 10.969-1.5ZM504.762 686.998c-.508 3.102-1.922 5.817-4.235 8.141-2.312 2.32-5.453 4.172-9.422 5.547l-2.734-7.922c.469-.094 1.105-.281 1.906-.562 4.418-1.524 7.434-4.043 9.047-7.563 1.617-3.512 1.578-7.703-.11-12.578l-7.765-22.453 8.172-2.828 15.594 45.078-7.828 2.703ZM444.073 660.899c1.668-.25 3.184.113 4.547 1.094 1.356.976 2.168 2.36 2.438 4.14.261 1.72-.11 3.243-1.11 4.578-1.008 1.344-2.347 2.141-4.015 2.391-1.664.258-3.145-.09-4.438-1.047-1.3-.949-2.086-2.312-2.36-4.093-.269-1.782.087-3.344 1.063-4.688.98-1.336 2.274-2.125 3.875-2.375Zm0 0" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const DocumentIcon = ({ className, ...rest }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1080}
    height={1080}
    viewBox="0 0 810 810"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h1080v1080H0z" />
    <defs fill="currentColor">
      <clipPath id="a">
        <path d="M58.172 0h693.75v810H58.172Zm0 0" />
      </clipPath>
    </defs>
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M173.559 0C116.829 0 69.14 41.145 59.605 95.488a117.346 117.346 0 0 0-1.75 20.227v578.57C57.855 757.891 109.957 810 173.56 810h57.851c.945 0 1.89-.047 2.832-.14a28.29 28.29 0 0 0 5.563-1.106 29.561 29.561 0 0 0 5.238-2.168c.836-.45 1.648-.934 2.437-1.461a29.114 29.114 0 0 0 6.29-5.703 29.113 29.113 0 0 0 1.69-2.277 29.522 29.522 0 0 0 2.673-5.004c.363-.875.68-1.766.957-2.672.273-.907.504-1.824.687-2.754a28.3 28.3 0 0 0 .418-2.809 28.6 28.6 0 0 0 0-5.672 29.163 29.163 0 0 0-1.105-5.559 29.038 29.038 0 0 0-2.172-5.241 29.452 29.452 0 0 0-1.457-2.434 29.178 29.178 0 0 0-1.691-2.281 29.448 29.448 0 0 0-1.907-2.102 27.748 27.748 0 0 0-2.105-1.906 28.516 28.516 0 0 0-4.715-3.152 29.596 29.596 0 0 0-2.566-1.215 29.38 29.38 0 0 0-2.672-.957 29.498 29.498 0 0 0-5.563-1.105 28.577 28.577 0 0 0-2.832-.137H173.56c-32.551 0-57.852-25.305-57.852-57.86v-578.57c0-3.516.324-6.934.902-10.227 4.774-27.203 27.914-47.633 56.95-47.633h318.18v86.79c0 47.578 39.202 86.785 86.777 86.785h115.703v462.855c0 32.555-25.301 57.86-57.852 57.86H347.11a28.577 28.577 0 0 0-5.64.554c-.93.184-1.848.414-2.754.688a29.38 29.38 0 0 0-2.672.957c-.875.363-1.73.77-2.566 1.215a28.516 28.516 0 0 0-4.715 3.152 27.748 27.748 0 0 0-2.106 1.906 29.448 29.448 0 0 0-1.906 2.102 29.178 29.178 0 0 0-1.691 2.281 29.452 29.452 0 0 0-1.457 2.434 29.038 29.038 0 0 0-2.172 5.242 28.942 28.942 0 0 0-.688 2.754 28.223 28.223 0 0 0-.555 5.64 28.598 28.598 0 0 0 .555 5.645c.184.93.414 1.847.688 2.754.277.906.593 1.797.957 2.672a29.596 29.596 0 0 0 2.672 5.004 29.114 29.114 0 0 0 5.703 6.289c.73.601 1.492 1.164 2.277 1.691.79.527 1.602 1.012 2.438 1.46a29.561 29.561 0 0 0 5.238 2.169c.906.277 1.824.504 2.754.691.93.184 1.863.325 2.808.414.942.094 1.887.141 2.832.141h289.258c63.598 0 115.703-52.11 115.703-115.715V222.953a78.357 78.357 0 0 0-22.937-55.371l-144.63-144.64A78.326 78.326 0 0 0 529.142 0Zm376.03 69.836L653.317 173.57h-74.8c-16.524 0-28.926-12.402-28.926-28.925Zm0 0" />
    </g>
    <path
      fill="currentColor"
      d="M260.336 520.715a28.6 28.6 0 0 0-2.836.14 28.29 28.29 0 0 0-5.563 1.106c-.906.273-1.796.594-2.671.957a28.456 28.456 0 0 0-5 2.672 28.46 28.46 0 0 0-2.282 1.691 28.602 28.602 0 0 0-2.105 1.907 29.449 29.449 0 0 0-1.906 2.101 29.883 29.883 0 0 0-1.688 2.281 28.516 28.516 0 0 0-1.46 2.438 28.547 28.547 0 0 0-1.216 2.566 29.38 29.38 0 0 0-.957 2.672 29.498 29.498 0 0 0-1.105 5.563c-.09.941-.137 1.886-.137 2.836 0 .945.047 1.89.137 2.832a29.498 29.498 0 0 0 1.105 5.562c.278.906.594 1.8.957 2.676.364.875.77 1.73 1.215 2.566.446.836.934 1.645 1.461 2.434a29.13 29.13 0 0 0 1.688 2.281 28.602 28.602 0 0 0 4.012 4.008 28.46 28.46 0 0 0 2.28 1.691 28.857 28.857 0 0 0 5 2.676 29.353 29.353 0 0 0 5.426 1.645c.93.183 1.864.324 2.809.418.941.09 1.887.136 2.836.136H549.59c.95 0 1.894-.047 2.836-.136a29.685 29.685 0 0 0 2.808-.418 29.353 29.353 0 0 0 5.426-1.645 28.857 28.857 0 0 0 5-2.676 28.544 28.544 0 0 0 4.383-3.598 28.544 28.544 0 0 0 3.598-4.382 29.493 29.493 0 0 0 1.46-2.434c.446-.836.852-1.691 1.215-2.566a29.429 29.429 0 0 0 1.645-5.43c.184-.93.324-1.863.418-2.808.09-.942.137-1.887.137-2.832 0-.95-.047-1.895-.137-2.836a29.498 29.498 0 0 0-.418-2.809 29.352 29.352 0 0 0-1.645-5.426 28.547 28.547 0 0 0-1.214-2.566 29.178 29.178 0 0 0-3.152-4.719 28.544 28.544 0 0 0-1.907-2.102 28.544 28.544 0 0 0-4.383-3.597 28.456 28.456 0 0 0-5-2.672 28.245 28.245 0 0 0-2.672-.957 28.46 28.46 0 0 0-5.563-1.105 28.6 28.6 0 0 0-2.835-.141ZM260.336 376.07a28.6 28.6 0 0 0-2.836.14 28.3 28.3 0 0 0-2.809.419c-.93.183-1.847.414-2.754.687a29.38 29.38 0 0 0-2.671.957 28.49 28.49 0 0 0-2.567 1.215 28.818 28.818 0 0 0-6.82 5.055 29.509 29.509 0 0 0-1.906 2.105 28.415 28.415 0 0 0-1.688 2.282 27.857 27.857 0 0 0-1.46 2.433 29.596 29.596 0 0 0-1.216 2.567 29.38 29.38 0 0 0-.957 2.672 28.942 28.942 0 0 0-.687 2.753c-.184.93-.324 1.868-.418 2.81-.09.944-.137 1.886-.137 2.835 0 .95.047 1.895.137 2.836.094.941.234 1.879.418 2.809.183.93.414 1.847.687 2.753.278.907.594 1.797.957 2.672.364.875.77 1.73 1.215 2.567.446.836.934 1.648 1.461 2.433.524.79 1.09 1.551 1.688 2.282a29.509 29.509 0 0 0 1.906 2.105 29.509 29.509 0 0 0 2.105 1.906 28.818 28.818 0 0 0 4.715 3.148c.836.45 1.692.852 2.567 1.216.875.363 1.765.68 2.672.957.906.273 1.824.503 2.753.687a28.3 28.3 0 0 0 2.809.418 28.6 28.6 0 0 0 2.836.14H549.59a28.6 28.6 0 0 0 2.836-.14c.941-.094 1.879-.23 2.808-.418.93-.183 1.848-.414 2.754-.687a29.38 29.38 0 0 0 2.672-.957 28.49 28.49 0 0 0 2.567-1.215 28.818 28.818 0 0 0 10.414-9.442 28.857 28.857 0 0 0 2.675-5 29.352 29.352 0 0 0 1.645-5.425c.184-.93.324-1.868.418-2.81.09-.94.137-1.886.137-2.835 0-.95-.047-1.89-.137-2.836a29.685 29.685 0 0 0-.418-2.809 29.352 29.352 0 0 0-1.645-5.426 28.857 28.857 0 0 0-2.676-5 28.46 28.46 0 0 0-1.69-2.28 28.602 28.602 0 0 0-1.907-2.106 29.448 29.448 0 0 0-2.102-1.906 28.818 28.818 0 0 0-4.715-3.148 28.49 28.49 0 0 0-2.566-1.216 29.38 29.38 0 0 0-2.672-.957 28.943 28.943 0 0 0-2.754-.687 28.472 28.472 0 0 0-2.808-.418 28.6 28.6 0 0 0-2.836-.14Zm0 0"
    />
  </svg>
);