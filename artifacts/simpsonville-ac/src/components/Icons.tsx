import { ReactNode } from "react";

const N = "#0D2D6E";
const R = "#CC2229";
const L = "#E8EFF9";
const G = "#F5A623";

type P = { size?: number };

export function StarIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,4 24.9,14.3 36.2,15.5 28,23.2 30.2,34.4 20,28.9 9.8,34.4 12,23.2 3.8,15.5 15.1,14.3" fill={G} stroke="#C88A0A" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}

export function ShieldIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4L34 9V22C34 31 20 37 20 37C20 37 6 31 6 22V9Z" fill={L} stroke={N} strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M13 21L18 26L28 15" stroke={N} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LightningIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4L9 22H21L17 36L31 18H19Z" fill={R} stroke="#9A1820" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}

export function DollarIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill={L} stroke={N} strokeWidth="2"/>
      <line x1="20" y1="10" x2="20" y2="12" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="28" x2="20" y2="30" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 15.5C15 13.6 17.2 12 20 12C22.8 12 25 13.6 25 15.5C25 17.4 22.5 18.8 20 19.5C17.5 20.2 15 21.6 15 24C15 26.4 17.2 28 20 28C22.8 28 25 26.4 25 24" stroke={N} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function FinancingIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="30" height="26" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <path d="M5 18H35" stroke={N} strokeWidth="2"/>
      <line x1="13" y1="6" x2="13" y2="14" stroke={N} strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="27" y1="6" x2="27" y2="14" stroke={N} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="15" cy="25" r="3.5" stroke={R} strokeWidth="2"/>
      <circle cx="25" cy="31" r="3.5" stroke={R} strokeWidth="2"/>
      <line x1="12" y1="34" x2="28" y2="22" stroke={R} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function AcIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="14" width="34" height="22" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <rect x="3" y="14" width="34" height="7.5" rx="3" fill={N}/>
      <rect x="3" y="18" width="34" height="3.5" fill={N}/>
      <circle cx="20" cy="29" r="6.5" stroke={N} strokeWidth="1.8"/>
      <path d="M20 22.5V29M26.5 29H20M20 35.5V29M13.5 29H20" stroke={N} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="8.5" cy="17.5" r="1.8" fill="#1A7AC4"/>
      <circle cx="13.5" cy="17.5" r="1.8" fill="#4CAF50"/>
      <path d="M27 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
    </svg>
  );
}

export function HvacIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="15" fill={L} stroke={N} strokeWidth="2"/>
      <path d="M8 31A14 14 0 1 1 32 31" stroke={N} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M8 31A14 14 0 0 1 24 7.5" stroke={R} strokeWidth="3" fill="none" strokeLinecap="round"/>
      <line x1="20" y1="20" x2="14" y2="12" stroke={N} strokeWidth="2.2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill={N}/>
      <circle cx="20" cy="20" r="1.5" fill="white"/>
    </svg>
  );
}

export function InstallIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="20" width="30" height="17" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <rect x="5" y="20" width="30" height="7" rx="3" fill={N}/>
      <rect x="5" y="24" width="30" height="3" fill={N}/>
      <circle cx="20" cy="31" r="4.5" stroke={N} strokeWidth="1.8"/>
      <path d="M20 5V15M15.5 11L20 15.5 24.5 11" stroke={R} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function ReplaceIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 9A14 14 0 1 0 33 26" stroke={N} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M33 26L28 34 38 34Z" fill={N}/>
      <path d="M20 9L15 3 25 3Z" fill={R}/>
      <circle cx="20" cy="20" r="5" fill={L} stroke={N} strokeWidth="2"/>
    </svg>
  );
}

export function HeatPumpIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="17" width="30" height="18" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <rect x="5" y="17" width="30" height="6.5" rx="3" fill={N}/>
      <rect x="5" y="21" width="30" height="2.5" fill={N}/>
      <circle cx="20" cy="28.5" r="5" stroke={N} strokeWidth="1.8"/>
      <path d="M14 12V5M11 8L14 5 17 8" stroke={R} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 5V12M23 9L26 12 29 9" stroke="#1A7AC4" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FurnaceIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="9" y="18" width="22" height="18" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <rect x="13" y="23" width="6" height="6" rx="1.5" fill={N}/>
      <rect x="21" y="23" width="6" height="6" rx="1.5" fill={N}/>
      <line x1="13" y1="33" x2="27" y2="33" stroke={N} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 15C20 15 16 11 17.5 5C17.5 5 14 9 15 14C15 14 12 11 12 7C12 7 8 12 11 17C11 17 10 14 13 14C13 14 11 19 16 19C18.5 19 20 17 20 15Z" fill={R}/>
      <path d="M23 12C23 12 21 9 22 5C22 5 25 9 24 14C24 14 27 11 26 7C26 7 29 12 27 16C27 16 28.5 13 26 14C26 14 28 18 24 18C22 18 21 16 23 12Z" fill="#FF8C00" opacity="0.85"/>
    </svg>
  );
}

export function MaintenanceIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="22" r="10" fill={L} stroke={N} strokeWidth="2"/>
      <circle cx="18" cy="22" r="4" fill={N}/>
      <path d="M18 10V14M18 30V34M6 22H10M26 22H30M9.5 13.5L12.3 16.3M23.7 27.7L26.5 30.5M9.5 30.5L12.3 27.7M23.7 16.3L26.5 13.5" stroke={N} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M29 9C29 9 26 8 25 11L24 12L22 10L22.5 8.5C23.5 6 27 5 30 7.5C33 10 32.5 13.5 30 15L28 16L27 14L28 13C30 11.5 29 9 29 9Z" fill={R} stroke="white" strokeWidth="0.8"/>
    </svg>
  );
}

export function MiniSplitIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="4" height="30" rx="2" fill="#C5D5E0" stroke="#9EB0BC" strokeWidth="1"/>
      <rect x="9" y="13" width="28" height="14" rx="4" fill={N}/>
      <rect x="13" y="16" width="8" height="5" rx="1.5" fill="#1A7AC4"/>
      <line x1="9" y1="25" x2="37" y2="25" stroke="white" strokeWidth="1" strokeOpacity="0.3"/>
      <path d="M15 30C15 33 17 36 18 36" stroke={N} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M22 30C22 33 23 35 24 36" stroke={N} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <path d="M29 30C29 33 30 35 31 36" stroke={N} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="31" cy="17" r="2.5" fill="#4CAF50"/>
    </svg>
  );
}

export function SunIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="8" fill={G} stroke="#C88A0A" strokeWidth="1.5"/>
      <path d="M20 4V8M20 32V36M4 20H8M32 20H36M7.5 7.5L10.3 10.3M29.7 29.7L32.5 32.5M7.5 32.5L10.3 29.7M29.7 10.3L32.5 7.5" stroke="#C88A0A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

export function HouseIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 5L37 21H31V37H9V21H3Z" fill={L} stroke={N} strokeWidth="2" strokeLinejoin="round"/>
      <rect x="16" y="26" width="8" height="11" rx="1.5" fill={N}/>
      <circle cx="22.5" cy="31.5" r="1.2" fill={L}/>
      <rect x="11" y="22" width="5" height="5" rx="1" fill="#1A7AC4" opacity="0.85"/>
      <rect x="24" y="22" width="5" height="5" rx="1" fill="#1A7AC4" opacity="0.85"/>
    </svg>
  );
}

export function StormIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 24A9 9 0 0 1 11 6A11 11 0 0 1 32 10A7 7 0 0 1 30 24Z" fill={L} stroke={N} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M23 22L16 32H23L19 40L32 26H25Z" fill={G} stroke="#C88A0A" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}

export function FamilyIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="9" r="5.5" fill={N}/>
      <path d="M12 38V27C12 23 15.5 20.5 20 20.5C24.5 20.5 28 23 28 27V38" fill={L} stroke={N} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="8" cy="13" r="4" fill={N} opacity="0.65"/>
      <path d="M3 38V29C3 26 5 24 8 24C10 24 12 25 13 27" fill="none" stroke={N} strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
      <circle cx="32" cy="13" r="4" fill={N} opacity="0.65"/>
      <path d="M37 38V29C37 26 35 24 32 24C30 24 28 25 27 27" fill="none" stroke={N} strokeWidth="2" strokeLinecap="round" opacity="0.65"/>
    </svg>
  );
}

export function WrenchIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33 9A8 8 0 0 0 21 17L8 30A4.5 4.5 0 0 0 14.2 36.5L27 23A8 8 0 0 0 33 9ZM29 11L26 14L23 11L26 8Z" fill={L} stroke={N} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="11.5" cy="33.5" r="2.5" fill={N}/>
    </svg>
  );
}

export function ClockIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" fill={L} stroke={N} strokeWidth="2"/>
      <path d="M20 9V20L27 25" stroke={N} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="2.5" fill={N}/>
    </svg>
  );
}

export function PhoneIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 6H10A4 4 0 0 0 6 10C6 24 16 34 30 34A4 4 0 0 0 34 30V26A4 4 0 0 0 30 22L26 21A4 4 0 0 0 22 23L21 25C18 24 16 22 15 19L17 18A4 4 0 0 0 19 14L18 10A4 4 0 0 0 14 6Z" fill={L} stroke={N} strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  );
}

export function CertificateIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="25" height="30" rx="3" fill={L} stroke={N} strokeWidth="2"/>
      <line x1="10" y1="13" x2="25" y2="13" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="18" x2="25" y2="18" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="23" x2="20" y2="23" stroke={N} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="8" fill={G} stroke="#C88A0A" strokeWidth="2"/>
      <polygon points="30,24 31.8,28.4 36.5,28.4 32.8,31.2 34.2,36 30,33.2 25.8,36 27.2,31.2 23.5,28.4 28.2,28.4" fill="white" strokeWidth="0"/>
    </svg>
  );
}

export function SnowflakeIcon({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="4" x2="20" y2="36" stroke="#1A7AC4" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="4" y1="20" x2="36" y2="20" stroke="#1A7AC4" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="7.5" y1="7.5" x2="32.5" y2="32.5" stroke="#1A7AC4" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="32.5" y1="7.5" x2="7.5" y2="32.5" stroke="#1A7AC4" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="20" cy="4" r="2.5" fill="#1A7AC4"/>
      <circle cx="20" cy="36" r="2.5" fill="#1A7AC4"/>
      <circle cx="4" cy="20" r="2.5" fill="#1A7AC4"/>
      <circle cx="36" cy="20" r="2.5" fill="#1A7AC4"/>
      <circle cx="7.5" cy="7.5" r="2.5" fill="#1A7AC4"/>
      <circle cx="32.5" cy="32.5" r="2.5" fill="#1A7AC4"/>
      <circle cx="32.5" cy="7.5" r="2.5" fill="#1A7AC4"/>
      <circle cx="7.5" cy="32.5" r="2.5" fill="#1A7AC4"/>
      <circle cx="20" cy="20" r="4" fill="white" stroke="#1A7AC4" strokeWidth="2"/>
    </svg>
  );
}

const ICON_MAP: Record<string, (size: number) => ReactNode> = {
  star:         s => <StarIcon size={s} />,
  shield:       s => <ShieldIcon size={s} />,
  lightning:    s => <LightningIcon size={s} />,
  dollar:       s => <DollarIcon size={s} />,
  financing:    s => <FinancingIcon size={s} />,
  ac:           s => <AcIcon size={s} />,
  hvac:         s => <HvacIcon size={s} />,
  install:      s => <InstallIcon size={s} />,
  replace:      s => <ReplaceIcon size={s} />,
  heatpump:     s => <HeatPumpIcon size={s} />,
  furnace:      s => <FurnaceIcon size={s} />,
  maintenance:  s => <MaintenanceIcon size={s} />,
  minisplit:    s => <MiniSplitIcon size={s} />,
  sun:          s => <SunIcon size={s} />,
  house:        s => <HouseIcon size={s} />,
  storm:        s => <StormIcon size={s} />,
  family:       s => <FamilyIcon size={s} />,
  wrench:       s => <WrenchIcon size={s} />,
  clock:        s => <ClockIcon size={s} />,
  phone:        s => <PhoneIcon size={s} />,
  certificate:  s => <CertificateIcon size={s} />,
  snowflake:    s => <SnowflakeIcon size={s} />,
};

export function getHvacIcon(name: string, size = 40): ReactNode {
  return ICON_MAP[name]?.(size) ?? null;
}
