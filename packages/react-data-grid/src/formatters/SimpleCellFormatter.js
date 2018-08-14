const React = require('react');
import PropTypes from 'prop-types';

class SimpleCellFormatter extends React.Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.bool]).isRequired,
    className: PropTypes.string
  };

  shouldComponentUpdate(nextProps: any): boolean {
    return nextProps.value !== this.props.value;
  }

  render(): ?ReactElement {
    return (
      <div
        title={this.props.value}
        className={this.props.className}
        style={{ width: 'max-content' }}
      >
        {this.props.value}
      </div>
    );
  }
}

module.exports = SimpleCellFormatter;
