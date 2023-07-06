const SingleColor = ({ index, color }) => {
  console.log(color);

  const { hex, weight } = color;

  return (
    <article
      className={index > 10 ? "color-light color" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`
    #${hex}`}</p>
    </article>
  );
};
export default SingleColor;
