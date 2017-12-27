import React from 'react';
import PropTypes from 'prop-types';
import './UnderConstruction.css';

class UnderConstruction extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: '' };

    this.onChange = this.onChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();

    if (this.state.inputValue) {
      this.props.subscribe.onSubmit(this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }

  render() {
    const { background, title, description, logo, subscribe, links } = this.props;

    if (background.overlay && background.overlay.color && !background.overlay.opacity) {
      console.error("background.overlay.opacity is required when using background.overlay");
    }

    return (
      <div
        className="UnderConstruction"
        style={{
          backgroundImage: `url(${background.image})`,
          backgroundColor: background.color,
          color: background.textColor,
          ...background.style
        }}
      >
        {background.overlay && background.overlay.color &&
          <div
            style={{
              backgroundColor: background.overlay.color,
              opacity: background.overlay.opacity,
            }}
            className="UnderConstruction-overlay"
          />}

        <div className="UnderConstruction-container">
          {logo.src && 
            <div className="UnderConstruction-logo-container">
              <img
                className="UnderConstruction-logo"
                alt={logo.alt}
                src={logo.src}
                style={{ ...logo.style }}
              />
            </div>}

          {title.text &&
            <div 
              className="UnderConstruction-title"
              style={{ ...title.style }}
            >
              {title.text}
            </div>}         

          {description.text &&
            <div
              className="UnderConstruction-description"
              style={{ ...description.style }}
            >
              {description.text}
            </div>}

          {subscribe.onSubmit && 
            <div className="UnderConstruction-notify">
              <form onSubmit={this.onFormSubmit}>
                <input
                  className="UnderConstruction-input"
                  type="text"
                  placeholder={subscribe.placeholder}
                  onChange={this.onChange}
                  style={{ ...subscribe.inputStyle }}
                  value={this.state.inputValue}
                />
                <button
                  style={{ ...subscribe.buttonStyle }}
                  className="UnderConstruction-notify-button"
                  type="submit"
                >
                  {subscribe.buttonText || 'Submit'}
                </button>
              </form>
            </div>}
        </div>  

        {links && links.length > 0 && 
          <div className="UnderConstruction-social-networks">
            {links.map((social, i) => (
              <a
                className="UnderConstruction-social-networks-link"
                key={i}
                target='_blank'
                rel="noopener noreferrer"
                href={social.url}
              >
                {social.image &&
                  <img
                    className="UnderConstruction-social-networks-image"
                    src={social.image}
                    alt={social.text}
                    style={{ ...social.imageStyle }}
                  />}
                {social.text && 
                  <span
                    className="UnderConstruction-social-networks-text"
                    style={{ ...social.textStyle }}
                  >
                    {social.text}
                  </span>}
              </a>
            ))}
          </div>}
      </div>
    );
  }
}

UnderConstruction.defaultProps = {
  background: {
    image: '',
    color: '',
    textColor: '',
    overlay: {},
    style: {},
  },
  logo: {
    src: '',
    alt: '',
    style: {},
  },
  title: {
    text: '',
    style: {},
  },
  description: {
    text: '',
    style: {},
  },
  subscribe: {
    onSubmit: null,
    placeholder: '',
    buttonText: '',
    inputStyle: {},
    buttonStyle: {},
  },
  links: [{
    url: '',
    image: '',
    text: '',
    imageStyle: {},
    textStyle: {},
  }],
};

UnderConstruction.propTypes = {
  background: PropTypes.shape({
    image: PropTypes.string,
    color: PropTypes.string,
    textColor: PropTypes.string,
    style: PropTypes.object,
    overlay: PropTypes.shape({
      color: PropTypes.string,
      opacity: PropTypes.string,
    })
  }),
  logo: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.object,
  }),
  title: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.object,
  }),
  description: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.object,
  }),  
  subscribe: PropTypes.shape({
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    buttonText: PropTypes.string,
    inputStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    imageStyle: PropTypes.object,
    textStyle: PropTypes.object,
  })),
};

export default UnderConstruction;
