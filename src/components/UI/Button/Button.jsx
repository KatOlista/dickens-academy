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
  type = 'button'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      className={buttonClassName}
    >
      {children}
    </button>
  );
};
