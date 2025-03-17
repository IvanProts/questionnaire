import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/public/Logo.svg';
import backArrow from '@/public/BackArrow.svg';
import { HeaderProps } from '@/types/header';

export default function Header({ isDarkMode = false }: HeaderProps) {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center w-full px-6 py-4">
      <button onClick={() => router.back()} aria-label="Go back">
        <Image
          src={backArrow}
          alt="Back"
          width={9}
          height={16}
          className={isDarkMode ? 'invert' : ''}
        />
      </button>

      <Image
        src={logo}
        alt="Logo"
        width={16}
        height={16}
        className={isDarkMode ? 'invert' : ''}
      />

      <div className="w-[9px]" /> {/* Вирівнювання по центру */}
    </header>
  );
}