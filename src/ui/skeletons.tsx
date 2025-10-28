export function AddressesSkeleton() {
  return (
    <section className='grid h-full w-full gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16'>
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className='bg-foreground h-48 w-full animate-pulse rounded-md'
        />
      ))}
    </section>
  );
}
