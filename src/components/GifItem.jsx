export const GifItem = ({ title, src }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};
