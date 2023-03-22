import PropTypes from "prop-types";

export const GifItem = ({ title, src, id }) => {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <p>{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  id: PropTypes.number,
};
