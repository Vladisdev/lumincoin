export const InputIcon = ({ name }: { name: string }) => {
  return {
    mail: (
      <svg
        width='38'
        height='38'
        viewBox='0 0 38 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_15_207)'>
          <path
            d='M0 4C0 1.79086 1.79086 0 4 0H38V38H4C1.79086 38 0 36.2091 0 34V4Z'
            fill='#E9ECEF'
          />
          <path
            d='M0 4C0 1.79086 1.79086 0 4 0H38V38H4C1.79086 38 0 36.2091 0 34V4Z'
            stroke='#CED4DA'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M25.6885 16.3176L19.3885 12.1176C19.1533 11.9608 18.8474 11.9608 18.6122 12.1176L12.3122 16.3176C12.1169 16.4478 12 16.6662 12 16.9V24.6C12 25.3721 12.6279 26 13.4 26H24.6C25.3721 26 26 25.3721 26 24.6V16.9C26 16.6662 25.8831 16.4478 25.6885 16.3176ZM19 13.5414L24.0379 16.9L19 20.2586L13.9621 16.9L19 13.5414ZM13.4 24.6V18.2083L18.6115 21.6824C18.7291 21.7608 18.8649 21.8 19 21.8C19.1351 21.8 19.2709 21.7608 19.3885 21.6824L24.6 18.2083L24.5979 24.6H13.4Z'
            fill='#6C757D'
          />
        </g>
        <defs>
          <clipPath id='clip0_15_207'>
            <rect width='38' height='38' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
    password: (
      <svg
        width='38'
        height='38'
        viewBox='0 0 38 38'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_15_225)'>
          <path
            d='M0 4C0 1.79086 1.79086 0 4 0H38V38H4C1.79086 38 0 36.2091 0 34V4Z'
            fill='#E9ECEF'
          />
          <path
            d='M0 4C0 1.79086 1.79086 0 4 0H38V38H4C1.79086 38 0 36.2091 0 34V4Z'
            stroke='#CED4DA'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M19.4 11C17.1944 11 15.4 12.7944 15.4 15V17.4H14.6C13.7176 17.4 13 18.1176 13 19V25.4C13 26.2824 13.7176 27 14.6 27H24.2C25.0824 27 25.8 26.2824 25.8 25.4V19C25.8 18.1176 25.0824 17.4 24.2 17.4H23.4V15C23.4 12.7944 21.6056 11 19.4 11ZM24.2 19L24.2016 25.4H14.6V19H24.2ZM17 17.4V15C17 13.6768 18.0768 12.6 19.4 12.6C20.7232 12.6 21.8 13.6768 21.8 15V17.4H17Z'
            fill='#6C757D'
          />
        </g>
        <defs>
          <clipPath id='clip0_15_225'>
            <rect width='38' height='38' fill='white' />
          </clipPath>
        </defs>
      </svg>
    ),
  }[name]
}
