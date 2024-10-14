import Image from 'next/image';
import Link from 'next/link';

import { MenuMobile } from './components/MenuMobile';
import { MenuScrollNav } from './components/MenuScrollNav';

import Search from '@/app/public/assets/icons/Search.svg';
import Cart from '@/app/public/assets/icons/Cart.svg';
import Login from '@/app/public/assets/icons/Login.svg';
import Logo from '@/app/public/assets/images/Logo.svg';

export const HeaderComponent = () => {

    return (
        <header className='flex flex-wrap justify-center w-full'>
            <div className='flex w-full md:justify-evenly justify-center items-center gap-4 p-5 border border-bottom border-neutral-10'>
                <div className='flex items-center gap-4'>
                    <MenuMobile />
                    <Image src={Search} alt='Busqueda' width={21} height={20} />
                </div>
                <div>
                    <Link href={'/'}>
                        <Image src={Logo} alt='Logo de Tiendanimal' width={188} height={27} />
                    </Link>
                </div>
                <div className='flex items-center gap-4'>
                    <Image src={Login} alt='Login' width={23} height={23} />
                    <Image src={Cart} alt='Mi carrito' width={28} height={22} />
                </div>
            </div>
            <MenuScrollNav />
        </header>
    );
};