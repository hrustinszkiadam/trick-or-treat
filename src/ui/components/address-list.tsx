import { getAddresses } from '@/features/addresses/lib/actions';
import AddressCard from '@/ui/components/address-card';

export default async function AddressList() {
  const addresses = await getAddresses();
  return (
    <section className='grid h-full w-full gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16'>
      {addresses.map((address) => (
        <AddressCard
          address={address}
          key={address.id}
        />
      ))}
    </section>
  );
}
