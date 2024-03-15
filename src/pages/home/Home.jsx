import { useEffect, useState } from "react";


const Home = () => {

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {

    const handleScroll = () => {
      const scrlTop = document.documentElement.scrollTop;
      setScrollTop(scrlTop)
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen top-24 bg-bgSoft dark:bg-dbgSoft no-scrollbar">
      <div className="relative">
        <img className={`w-full h-full object-cover scale-105 blur-[2px]`} src="foods/food-1.jpg" alt="WAHAT AL ROMMAN" />
        <div className={`absolute top-1/2 md:top-1/3 left-10 md:left-40 text-white ${scrollTop > 20 ? 'animate-fallup5' : 'animate-falldown5'} `}>
          <h2 className="text-4xl md:text-6xl font-anton">WAHAT AL ROMMAN</h2>
          <p className="mt-2">FOOD STUFF TRADING LLC</p>
        </div>
        <div className={`absolute top-2/3 left-10 md:left-40 w-1/2 text-white ${scrollTop > 20 ? 'animate-riseup5' : 'animate-risedown5'} `}>
          <h2 className="text-4xl md:text-6xl font-anton">Welcome</h2>
          <p className="mt-2">We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network.</p>
        </div>
      </div>
      <div className="w-full bg-map1 bg-cover text-white p-5 h-[50vw]">
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
      </div>
      <div className="w-full bg-map1 bg-cover text-white p-5 h-[50vw]">
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
      </div>
      <div className="w-full bg-map1 bg-cover text-white p-5 h-[50vw]">
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
        <p>We are considered as one of the leading companies in the field of importing foodstuff in the UAE since 1986 and come on the top of the list distributors to the UAE market. Our clientele consists of Hotels, Restaurants, Catering companies, Ship Chandlers, Hypermarkets, Cafes, Airlines and so on.With imported goods from all over the world we have a number of vehicles and storage facilities that are great in size with modernized equipment which allows us to cope our wide distribution network</p>
      </div>
    </div>
  );
};

export default Home;
