import { HeaderWrapper } from './header-styled';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Link href={'/'}>HEADER</Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
