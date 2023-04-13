import { Link, Outlet } from 'react-router-dom';
import './Nabvar.css';

import { useState } from 'react';

const iconsNavbar = [
  {
    title: 'Inicio',
    img: (
      <svg
        width='67'
        height='67'
        viewBox='0 0 67 67'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M60.0042 16.0158L40.856 2.61872C35.6368 -1.03806 27.6252 -0.838596 22.6055 3.05088L5.95057 16.049C2.62623 18.642 0 23.961 0 28.1495V51.0874C0 59.5645 6.88138 66.4791 15.3584 66.4791H51.1947C59.6718 66.4791 66.5532 59.5977 66.5532 51.1207V28.5816C66.5532 24.0939 63.661 18.5755 60.0042 16.0158ZM35.7698 53.1818C35.7698 54.5447 34.6395 55.675 33.2765 55.675C31.9136 55.675 30.7833 54.5447 30.7833 53.1818V43.2087C30.7833 41.8458 31.9136 40.7155 33.2765 40.7155C34.6395 40.7155 35.7698 41.8458 35.7698 43.2087V53.1818Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Asignaturas',
    img: (
      <svg
        width='67'
        height='63'
        viewBox='0 0 67 63'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.4'
          d='M33.275 8.77658V62.1163C32.7093 62.1163 32.1104 62.0164 31.6445 61.7502L31.5114 61.6837C25.1226 58.1898 13.9755 54.5296 6.75483 53.5646L5.78985 53.4315C2.59545 53.0322 0 50.0375 0 46.8431V6.64698C0 2.68726 3.22767 -0.30749 7.1874 0.0252597C14.1751 0.590935 24.7566 4.11809 30.6796 7.81161L31.5114 8.31073C32.0106 8.61021 32.6428 8.77658 33.275 8.77658Z'
          fill='white'
        />
        <path
          d='M66.55 6.68044V46.8433C66.55 50.0377 63.9546 53.0324 60.7602 53.4317L59.6621 53.5648C52.4082 54.5298 41.2278 58.2233 34.839 61.7505C34.4064 62.0167 33.874 62.1165 33.275 62.1165V8.77676C33.9072 8.77676 34.5395 8.61038 35.0386 8.31091L35.6043 7.94489C41.5272 4.21809 52.142 0.657661 59.1297 0.0587108H59.3293C63.2891 -0.274039 66.55 2.68744 66.55 6.68044Z'
          fill='white'
        />
        <path
          d='M19.1333 21.8871H11.6464C10.2821 21.8871 9.15076 20.7558 9.15076 19.3915C9.15076 18.0272 10.2821 16.8959 11.6464 16.8959H19.1333C20.4975 16.8959 21.6289 18.0272 21.6289 19.3915C21.6289 20.7558 20.4975 21.8871 19.1333 21.8871Z'
          fill='white'
        />
        <path
          d='M21.6289 31.8697H11.6464C10.2821 31.8697 9.15076 30.7383 9.15076 29.374C9.15076 28.0098 10.2821 26.8784 11.6464 26.8784H21.6289C22.9932 26.8784 24.1245 28.0098 24.1245 29.374C24.1245 30.7383 22.9932 31.8697 21.6289 31.8697Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Profesores',
    img: (
      <svg
        width='107'
        height='106'
        viewBox='0 0 107 106'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M53.4928 0.448364C82.4253 0.448364 106.002 24.0249 106.002 52.9574C106.002 68.185 99.4382 81.8899 88.9889 91.4991C89.0191 91.5293 89.032 91.5421 89.0374 91.5575C89.0415 91.5689 89.0415 91.5818 89.0415 91.6041C88.5165 92.0765 87.9392 92.5489 87.3618 93.0213L87.3612 93.0218C87.1466 93.1649 86.9563 93.3323 86.7573 93.5075C86.6641 93.5895 86.569 93.6732 86.4685 93.757C85.5233 94.5446 84.5257 95.2797 83.4755 96.0148C83.3655 96.0934 83.2601 96.172 83.1567 96.2492C82.9146 96.4299 82.6829 96.6028 82.4253 96.75C81.7252 97.205 81.0251 97.6134 80.325 98.0218C79.9749 98.2261 79.6248 98.4303 79.2748 98.6403C79.1348 98.7203 78.9948 98.8079 78.8519 98.8973C78.6196 99.0427 78.3797 99.1929 78.1196 99.3229C77.0169 99.9005 75.9142 100.426 74.8115 100.898L74.811 100.898C74.3911 101.108 73.9712 101.318 73.5513 101.476C72.8162 101.791 72.0344 102.059 71.2526 102.328C70.8617 102.462 70.4707 102.596 70.0857 102.736C69.6656 102.841 69.2455 102.999 68.8255 103.156C67.9349 103.466 66.9871 103.69 66.0454 103.913C65.7102 103.992 65.3757 104.071 65.0448 104.154C64.8212 104.182 64.6125 104.239 64.4107 104.295C64.2334 104.344 64.0615 104.392 63.8896 104.416C62.4194 104.731 60.9491 104.941 59.4263 105.099L59.4263 105.099C59.2163 105.151 59.0062 105.204 58.7962 105.204C57.0634 105.361 55.2781 105.466 53.4928 105.466C51.7075 105.466 49.9222 105.361 48.1369 105.204C47.9269 105.151 47.7168 105.099 47.5068 105.099C45.984 104.941 44.5138 104.731 43.0435 104.416C42.6234 104.364 42.2559 104.259 41.8883 104.154L41.8882 104.154C40.6281 103.839 39.3679 103.524 38.1077 103.156C37.6876 103.051 37.2675 102.894 36.8475 102.736C35.6922 102.368 34.5371 101.948 33.3819 101.476C32.9619 101.318 32.5419 101.108 32.122 100.898L32.1216 100.898C30.9664 100.426 29.8637 99.9005 28.8136 99.3229C28.6298 99.2179 28.433 99.0998 28.2361 98.9817C28.0391 98.8635 27.8422 98.7453 27.6584 98.6403C26.5557 98.0627 25.5055 97.4326 24.5078 96.75C24.3241 96.6187 24.1535 96.5006 23.9829 96.3825C23.8122 96.2643 23.6415 96.1462 23.4576 96.0148C23.2296 95.8468 22.9987 95.6787 22.767 95.51C21.9853 94.9409 21.1937 94.3645 20.4646 93.757C20.25 93.6139 20.0598 93.4465 19.8608 93.2713C19.7676 93.1893 19.6724 93.1055 19.572 93.0218C19.352 92.8238 19.1136 92.6351 18.8722 92.4439C18.5374 92.1788 18.1968 91.9092 17.8917 91.6041C17.9219 91.5739 17.9347 91.5611 17.9402 91.5456C17.9442 91.5342 17.9442 91.5214 17.9442 91.4991C7.5474 81.8899 0.983765 68.185 0.983765 52.9574C0.983765 24.0249 24.5603 0.448364 53.4928 0.448364ZM27.5533 79.0544C41.8883 69.4978 65.2023 69.4978 79.4323 79.0544C81.7427 80.5772 83.6855 82.3625 85.2083 84.3053C93.1897 76.2189 98.1255 65.1395 98.1255 52.9574C98.1255 28.3307 78.1196 8.32472 53.4928 8.32472C28.8661 8.32472 8.86012 28.3307 8.86012 52.9574C8.86012 65.1395 13.796 76.2189 21.7774 84.3053C23.3526 82.3625 25.2429 80.5772 27.5533 79.0544ZM33.8019 46.0246C33.8019 35.1552 42.6234 26.3337 53.4928 26.3337C64.3622 26.3337 73.1837 35.1552 73.1837 46.0246C73.1312 56.684 64.7823 65.2955 54.1754 65.663H54.0704H53.7029H53.2303C42.1509 65.348 33.8019 56.684 33.8019 46.0246Z'
          fill='white'
        />
      </svg>
    ),
  },
  {
    title: 'Interaciones',
    img: (
      <svg
        width='52'
        height='51'
        viewBox='0 0 52 51'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M49.3156 50.58H9.32209C4.4523 50.58 0.5 46.6277 0.5 41.7579V1.76442C0.5 0.79987 1.29987 0 2.26442 0C3.22897 0 4.02884 0.79987 4.02884 1.76442V41.7579C4.02884 44.6751 6.40492 47.0512 9.32209 47.0512H49.3156C50.2801 47.0512 51.08 47.851 51.08 48.8156C51.08 49.7801 50.2801 50.58 49.3156 50.58Z'
          fill='white'
        />
        <path
          d='M9.32168 38.8167C8.92174 38.8167 8.49828 38.6756 8.16892 38.3933C7.43963 37.7581 7.34553 36.6524 7.98072 35.8996L18.779 23.2899C19.9552 21.9254 21.649 21.102 23.437 21.0314C25.2249 20.9843 26.9893 21.6431 28.2597 22.9134L30.4947 25.1484C31.0828 25.7365 31.8356 26.0188 32.6825 26.0188C33.5059 25.9953 34.2587 25.6189 34.7998 24.9837L45.5981 12.374C46.2333 11.6447 47.339 11.5506 48.0918 12.1858C48.8211 12.821 48.9152 13.9267 48.28 14.6795L37.4818 27.2892C36.3055 28.6537 34.6116 29.4771 32.8237 29.5477C31.0122 29.5947 29.2713 28.936 28.0009 27.6656L25.7895 25.4307C25.2014 24.8425 24.4251 24.5367 23.6017 24.5602C22.7783 24.5838 22.0254 24.9602 21.4844 25.5954L10.6862 38.2051C10.3098 38.605 9.81572 38.8167 9.32168 38.8167Z'
          fill='white'
        />
      </svg>
    title: 'Teachers',
    img: (
      <svg 
        width="107" 
        height="106" 
        viewBox="0 0 107 106" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path  
          d="M53.4928 0.448364C82.4253 0.448364 106.002 24.0249 106.002 52.9574C106.002 68.185 99.4382 81.8899 88.9889 91.4991C89.0191 91.5293 89.032 91.5421 89.0374 91.5575C89.0415 91.5689 89.0415 91.5818 89.0415 91.6041C88.5165 92.0765 87.9392 92.5489 87.3618 93.0213L87.3612 93.0218C87.1466 93.1649 86.9563 93.3323 86.7573 93.5075C86.6641 93.5895 86.569 93.6732 86.4685 93.757C85.5233 94.5446 84.5257 95.2797 83.4755 96.0148C83.3655 96.0934 83.2601 96.172 83.1567 96.2492C82.9146 96.4299 82.6829 96.6028 82.4253 96.75C81.7252 97.205 81.0251 97.6134 80.325 98.0218C79.9749 98.2261 79.6248 98.4303 79.2748 98.6403C79.1348 98.7203 78.9948 98.8079 78.8519 98.8973C78.6196 99.0427 78.3797 99.1929 78.1196 99.3229C77.0169 99.9005 75.9142 100.426 74.8115 100.898L74.811 100.898C74.3911 101.108 73.9712 101.318 73.5513 101.476C72.8162 101.791 72.0344 102.059 71.2526 102.328C70.8617 102.462 70.4707 102.596 70.0857 102.736C69.6656 102.841 69.2455 102.999 68.8255 103.156C67.9349 103.466 66.9871 103.69 66.0454 103.913C65.7102 103.992 65.3757 104.071 65.0448 104.154C64.8212 104.182 64.6125 104.239 64.4107 104.295C64.2334 104.344 64.0615 104.392 63.8896 104.416C62.4194 104.731 60.9491 104.941 59.4263 105.099L59.4263 105.099C59.2163 105.151 59.0062 105.204 58.7962 105.204C57.0634 105.361 55.2781 105.466 53.4928 105.466C51.7075 105.466 49.9222 105.361 48.1369 105.204C47.9269 105.151 47.7168 105.099 47.5068 105.099C45.984 104.941 44.5138 104.731 43.0435 104.416C42.6234 104.364 42.2559 104.259 41.8883 104.154L41.8882 104.154C40.6281 103.839 39.3679 103.524 38.1077 103.156C37.6876 103.051 37.2675 102.894 36.8475 102.736C35.6922 102.368 34.5371 101.948 33.3819 101.476C32.9619 101.318 32.5419 101.108 32.122 100.898L32.1216 100.898C30.9664 100.426 29.8637 99.9005 28.8136 99.3229C28.6298 99.2179 28.433 99.0998 28.2361 98.9817C28.0391 98.8635 27.8422 98.7453 27.6584 98.6403C26.5557 98.0627 25.5055 97.4326 24.5078 96.75C24.3241 96.6187 24.1535 96.5006 23.9829 96.3825C23.8122 96.2643 23.6415 96.1462 23.4576 96.0148C23.2296 95.8468 22.9987 95.6787 22.767 95.51C21.9853 94.9409 21.1937 94.3645 20.4646 93.757C20.25 93.6139 20.0598 93.4465 19.8608 93.2713C19.7676 93.1893 19.6724 93.1055 19.572 93.0218C19.352 92.8238 19.1136 92.6351 18.8722 92.4439C18.5374 92.1788 18.1968 91.9092 17.8917 91.6041C17.9219 91.5739 17.9347 91.5611 17.9402 91.5456C17.9442 91.5342 17.9442 91.5214 17.9442 91.4991C7.5474 81.8899 0.983765 68.185 0.983765 52.9574C0.983765 24.0249 24.5603 0.448364 53.4928 0.448364ZM27.5533 79.0544C41.8883 69.4978 65.2023 69.4978 79.4323 79.0544C81.7427 80.5772 83.6855 82.3625 85.2083 84.3053C93.1897 76.2189 98.1255 65.1395 98.1255 52.9574C98.1255 28.3307 78.1196 8.32472 53.4928 8.32472C28.8661 8.32472 8.86012 28.3307 8.86012 52.9574C8.86012 65.1395 13.796 76.2189 21.7774 84.3053C23.3526 82.3625 25.2429 80.5772 27.5533 79.0544ZM33.8019 46.0246C33.8019 35.1552 42.6234 26.3337 53.4928 26.3337C64.3622 26.3337 73.1837 35.1552 73.1837 46.0246C73.1312 56.684 64.7823 65.2955 54.1754 65.663H54.0704H53.7029H53.2303C42.1509 65.348 33.8019 56.684 33.8019 46.0246Z" 
          fill="white"
        />
      </svg>
    ),
  },
];

function Nabvar() {
  const [open, isOpen] = useState(false);

  function openNavbar() {
    isOpen(true);
  }

  function closeNavbar() {
    isOpen(false);
  }

  return (
    <section className='containerAll'>
      <section
        style={{ width: open ? '250px' : '70px' }}
        className='containerNabvar'
        onMouseOver={openNavbar}
        onFocus={openNavbar}
        onMouseOut={closeNavbar}
        onBlur={closeNavbar}
      >
        {iconsNavbar.map((element) => (
          <Link key={element.title} to={`/${element.title.toLowerCase()}`}>
            <button
              type='button'
              className={open ? 'openNavbar' : 'closeNavbar'}
            >
              {element.img}
              <h1>{element.title}</h1>
            </button>
          </Link>
        ))}
      </section>
      <Outlet />
    </section>
  );
}

export default Nabvar;
