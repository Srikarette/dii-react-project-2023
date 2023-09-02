import { Link } from "react-router-dom";
import styled from "styled-components";
function Header() {
  return (
    <div className="header">
      <button>
        <Link to="/feed">Discovery</Link>
      </button>
      <button>Subscribe</button>
    </div>
  );
}

export default styled(Header)`
  color: #000;
`;
