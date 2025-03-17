import { ButtonProps } from '@/types/button';

export default function Button({ text, isActive, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-[330px] h-[64px] flex justify-center items-center text-[14px] font-medium border border-gray-300 shadow-md rounded-[16px] transition-all
        ${
          isActive
            ? 'bg-gradient-to-b from-[#141333] via-[#202261] via-[#543C97] to-[#6939A2] text-white'
            : 'bg-[#EAEEF7] text-black'
        }`}
    >
      {text}
    </button>
  );
}
