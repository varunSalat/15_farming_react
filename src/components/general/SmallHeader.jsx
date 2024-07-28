import { LeafIcon } from "lucide-react";
import PropTypes from "prop-types";
const SmallHeader = ({ text }) => {
  return (
    <div className="flex w-fit items-center gap-1 rounded-full border border-black-5 bg-white px-2 py-1">
      <LeafIcon size={18} className="text-secondary" />
      <p className="text-sm text-black-3">{text}</p>
    </div>
  );
};

SmallHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SmallHeader;
