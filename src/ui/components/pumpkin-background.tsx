import { Fragment } from 'react/jsx-runtime';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function PumpkinBackground() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10 h-full w-full overflow-hidden opacity-10'>
      <div className='md:hidden'>
        <PumpkinsMobile />
      </div>
      <div className='hidden md:block'>
        <PumpkinsDesktop />
      </div>
    </div>
  );
}

const positions = {
  mobile: [
    'top-0 left-0',
    'top-[10%] right-[10%]',
    'top-1/4 left-1/6',
    'top-2/5 right-1/6',
    'bottom-0 left-0',
    'bottom-0 right-0',
    'bottom-1/4 right-1/6',
    'bottom-2/5 left-1/6',
  ],
  desktop: [
    'top-0 left-0',
    'top-[10%] right-[10%]',
    'top-1/5 left-1/3',
    'top-2/5 right-1/7',
    'top-1/6 left-1/6',
    'top-1/6 right-2/6',
    'bottom-0 left-0',
    'bottom-0 right-0',
    'bottom-1/4 right-1/3',
    'bottom-2/5 left-1/6',
    'bottom-1/8 left-2/6',
    'bottom-1/6 right-2/8',
  ],
} as const;

function PumpkinImage({
  position,
  index,
}: {
  position: string;
  index: number;
}) {
  return (
    <Image
      src='/pumpkin.svg'
      alt='Pumpkin Background Decoration'
      width={100}
      height={100}
      className={cn(
        'fixed',
        position,
        index % 2 === 0 ? 'h-32 w-32 rotate-15' : 'h-24 w-24 -rotate-15',
      )}
      loading='eager'
    />
  );
}

function PumpkinsMobile() {
  return (
    <Fragment>
      {positions.mobile.map((position, index) => (
        <PumpkinImage
          key={index}
          position={position}
          index={index}
        />
      ))}
    </Fragment>
  );
}

function PumpkinsDesktop() {
  return (
    <Fragment>
      {positions.desktop.map((position, index) => (
        <PumpkinImage
          key={index}
          position={position}
          index={index}
        />
      ))}
    </Fragment>
  );
}
