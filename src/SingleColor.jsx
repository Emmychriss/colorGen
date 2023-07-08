import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard!");
      } catch (error) {
        toast.error("Failed to copy color");
      }
    } else {
      toast.error("Cannot copy to clipboard");
    }
  };

  return (
    <article
      className={index > 10 ? "color-light color" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`
    #${hex}`}</p>
    </article>
  );
};
export default SingleColor;
