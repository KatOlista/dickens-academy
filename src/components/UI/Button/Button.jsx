const buttonStyle = {
  outline: 'none',
  boxShadow: 'none',
  border: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
};

export const Button = ({
  children,
  buttonClassName,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={buttonStyle}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};
