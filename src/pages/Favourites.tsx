const Favourites = () => {
  return (
    <>
      <div className="favourites-empty flex items-center flex-col justify-center h-full">
        <h2 className="text-3xl text-white"> No movies favourited yet</h2>
        <p className="text-white">
          Start adding movies to your favourites and they will appear here
        </p>
      </div>
    </>
  );
};

export default Favourites;
