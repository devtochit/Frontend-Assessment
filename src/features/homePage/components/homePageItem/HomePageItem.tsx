import type { SetStateAction } from 'react';
import { useState } from 'react';

import LazyLoad from 'react-lazyload';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

import { Button } from '@/components/elements';
import { setSelectedDeviceInfo } from '@/features/deviceInfo/store';
import type { Phones } from '@/features/homePage/types';
import { useAppDispatch } from '@/store/hooks';

interface PhoneInfoProps {
  PhoneInfo: Phones[];
}

const itemsPerPage = 10;

export const HomePageItem = ({ PhoneInfo }: PhoneInfoProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [currentPage, setCurrentPage] = useState(0);

  const onBookSelect = (id: string) => {
    if (!PhoneInfo) return;
    //@ts-ignore
    dispatch(setSelectedDeviceInfo(PhoneInfo));
    navigate(`/device/${id}`);
  };

  const handlePageClick = (event: { selected: SetStateAction<number> }) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = PhoneInfo.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(PhoneInfo.length / itemsPerPage);

  return (
    <div className="p-5 flex flex-col items-center text-center">
      <div css={[tw`grid w-full grid-cols-4 gap-4 rounded-xl`]}>
        {
          //@ts-ignore
          currentItems.map(({ id, name }) => (
            <Button
              key={id} // Correct placement of key prop
              isUnstyled={true}
              onClick={() => onBookSelect(id)} // Pass the id to the handler
              className="relative inline-flex flex-col items-center justify-start w-full" // Combine classes properly
            >
              <div>
                <LazyLoad height="100%" once>
                  <img className="w-full h-full text-center" src="/iphone.webp" alt={name} />
                </LazyLoad>
                <h1>{name}</h1>
              </div>
            </Button>
          ))
        }
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};
