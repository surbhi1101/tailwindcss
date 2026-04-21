import "./css/ExploreButton.css";
function ExploreButton() {
  return (
    <button className="explore-btn" style={{ "--clr": "#7808d0" }}>
      <span className="icon-wrapper">
        {/* Main icon */}
        <svg
          viewBox="0 0 14 15"
          className="icon-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* Copy icon */}
        <svg
          viewBox="0 0 14 15"
          className="icon-svg icon-copy"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>
      Explore All
    </button>
  );
}
export default ExploreButton;
