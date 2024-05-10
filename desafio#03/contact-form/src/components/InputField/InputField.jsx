import PropTypes from "prop-types";

export default function InputField({ name, lbl, children, error }) {
  return (
    <fieldset className="input-group">
      <label htmlFor={name} className="input-group__lbl">
        {lbl}
      </label>

      <div className="input-field">
        {children}

        <span className="error-message">{error}</span>
      </div>
    </fieldset>
  );
}

InputField.propTypes = {
  name: PropTypes.string,
  lbl: PropTypes.string,
  children: PropTypes.element,
  error: PropTypes.string,
};
