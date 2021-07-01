import React, { Component } from "react";
import styles from "./Slider.module.css";

interface Props {
  initialSlide?: number;
  children: any[];
}

interface State {
  selectedSlide: number;
  slideWidth: number;
  autoplay: boolean;
}
export class Slider extends Component<Props, State> {
  sliderElement = React.createRef<HTMLDivElement>();
  autoplayInterval: any;

  state: State = {
    selectedSlide: 0,
    slideWidth: 0,
    autoplay: true,
  };

  static defaultProps = {
    initialSlide: 0,
  };

  componentDidMount() {
    window.addEventListener("resize", this.setSliderSize);
    this.setSliderSize();
    this.setAutoPlay();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSliderSize);
  }

  prev = () => {
    let selectedSlide = this.state.selectedSlide;
    const prevSlide = selectedSlide === 0 ? this.props.children.length - 1 : --selectedSlide;
    this.setState({
      selectedSlide: prevSlide,
    });
  };

  next = () => {
    let selectedSlide = this.state.selectedSlide;
    const nextSlide = selectedSlide === this.props.children.length - 1 ? 0 : ++selectedSlide;
    this.setState({
      selectedSlide: nextSlide,
    });
  };

  getWidthSlider = (): number => {
    const slider = this.sliderElement.current;
    if (slider) {
      const computedStyle = getComputedStyle(slider);
      const width = computedStyle.width;
      const w = parseInt(width || "", 10);
      return isNaN(w) ? 0 : w;
    }
    return 0;
  };

  setSliderSize = () => {
    this.setState({
      slideWidth: this.getWidthSlider(),
    });
  };

  setAutoPlay = (stop = false) => {
    if (stop) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    } else if (this.autoplayInterval == null) {
      this.autoplayInterval = setInterval(this.next, 3000);
    }
  };

  render() {
    const marginLeft = this.state.selectedSlide * -this.state.slideWidth;
    return (
      <div
        className={styles.root}
        ref={this.sliderElement}
        onMouseDown={() => this.setAutoPlay(true)}
        onClick={() => this.setAutoPlay(false)}
      >
        <div className={styles.slides} style={{ marginLeft: marginLeft }}>
          {React.Children.map(this.props.children, (child) => (
            <div className={styles.imageWrap}>{child}</div>
          ))}
        </div>
        <div className={`${styles.controlWrapper} ${styles.controlWrapperLeft}`} onClick={this.prev}>
          <div className={`${styles.control} ${styles.leftControl}`} />
        </div>
        <div className={`${styles.controlWrapper} ${styles.controlWrapperRight}`} onClick={this.next}>
          <div className={`${styles.control} ${styles.rightControl}`} />
        </div>
      </div>
    );
  }
}
