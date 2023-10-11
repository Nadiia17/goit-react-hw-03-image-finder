import { MagnifyingGlass } from 'react-loader-spinner'; // Імпортуйте правильно відповідно до вашої бібліотеки

export const Loader = () => (
  <div className="loader-container">
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="Loading"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </div>
);
